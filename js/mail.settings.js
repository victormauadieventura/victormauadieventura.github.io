/*
 --------------------------------
 Ajax Contact Form
 --------------------------------
 + https://github.com/pinceladasdaweb/Ajax-Contact-Form
 + A Simple Ajax Contact Form developed in PHP with HTML5 Form validation.
 + Has a fallback in jQuery for browsers that do not support HTML5 form validation.
 + version 1.0.1
 + Copyright 2014 Pedro Rogerio
 + Licensed under the MIT license
 + https://github.com/pinceladasdaweb/Ajax-Contact-Form
 */

function resetFormContact() {
    $('#contact-form').each(function () {
        this.reset();
    });
}
function resetFormSubscribers() {
    $('#subscribers-form').each(function () {
        this.reset();
    });
}

(function ($, window, document, undefined) {
    'use strict';

    var $form = $('#contact-form');

    $form.submit(function (e) {
        $('.form-group').removeClass('has-error');
        $('.help-block').remove();

        var formData = {
            'name': $('input[name="name"]').val(),
            'email': $('input[name="email"]').val(),
            'subject': $('input[name="subject"]').val(),
            'message': $('textarea[name="message"]').val()
        };

        $.ajax({
            type: 'POST',
            url: './process.php',
            data: formData,
            dataType: 'json',
            encode: true
        }).done(function (data) {
            if (!data.success) {
                if ((data.errors.name && data.errors.email && data.errors.subject && data.errors.message) || (data.errors.name && data.errors.email && data.errors.subject) || (data.errors.name && data.errors.subject && data.errors.message) || (data.errors.email && data.errors.subject && data.errors.message)) {
                    $.notify({
                        icon: 'glyphicon glyphicon-warning-sign',
                        title: 'Erro - ',
                        message: 'Muitos campos estão em branco'
                    }, {
                            type: 'danger',
                            offset: {
                                x: 50,
                                y: 100
                            }
                        });
                } else {
                    if (data.errors.name) {
                        $.notify({
                            icon: 'glyphicon glyphicon-remove',
                            title: 'Ops - ',
                            message: 'O campo nome é obrigatório'
                        }, {
                                type: 'warning',
                                offset: {
                                    x: 50,
                                    y: 100
                                }
                            });
                    }
                    if (data.errors.email) {
                        $.notify({
                            icon: 'glyphicon glyphicon-remove',
                            title: 'Ops - ',
                            message: 'O campo e-mail é obrigatório'
                        }, {
                                type: 'warning',
                                offset: {
                                    x: 50,
                                    y: 100
                                }
                            });
                    }
                    if (data.errors.subject) {
                        $.notify({
                            icon: 'glyphicon glyphicon-remove',
                            title: 'Ops - ',
                            message: 'O campo assunto é obrigatório'
                        }, {
                                type: 'warning',
                                offset: {
                                    x: 50,
                                    y: 100
                                }
                            });
                    }
                    if (data.errors.message) {
                        $.notify({
                            icon: 'glyphicon glyphicon-remove',
                            title: 'Ops - ',
                            message: 'O campo mensagem é obrigatório e deve conter no mínimo 10 caracteres'
                        }, {
                                type: 'warning',
                                offset: {
                                    x: 50,
                                    y: 100
                                }
                            });
                    }
                }
            } else {
                $.notify({
                    icon: 'glyphicon glyphicon-ok',
                    title: 'Mensagem enviada com sucesso - ',
                    message: 'Breve estarei entrando em contato com voc&ecirc;'
                }, {
                        type: 'success',
                        offset: {
                            x: 50,
                            y: 100
                        }
                    });
                resetFormContact();
            }
        }
            ).fail(function (data) {
                console.log(data);
            });

        e.preventDefault();
    });
}(jQuery, window, document));
