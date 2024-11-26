function showModernToast({
    title = '',
    description = '',
    iconType = 'success',
    position = 'top-right',
    timer = 3000,
    hasCloseButton = true,
}) {
    Swal.fire({
        toast: true,
        position: position,
        icon: iconType,
        title: `<p style="color:#222222; margin-bottom:0px;">${title}</p>`,
        html: description
            ? `<p style="margin: -4px; font-size: 13px; color: #101114;">${description}</p>`
            : '',
        customClass: {
            popup: 'modern-toast',
            closeButton: hasCloseButton ? 'swal-close-btn' : '',
        },
        showConfirmButton: false,
        timer: timer,
        timerProgressBar: true,
        showCloseButton: hasCloseButton,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });

}
function Inconrrect({
    title = '',
    description = '',
    iconType = 'error',
    position = 'top-right',
    timer = 3000,
    hasCloseButton = true,
}) {
    Swal.fire({
        toast: true,
        position: position,
        icon: iconType,
        title: `<p style="color:#222222; margin-bottom:0px;">${title}</p>`,
        html: description
            ? `<p style="margin: -4px; font-size: 12px; color: #101114;">${description}</p>`
            : '',
        customClass: {
            popup: 'modern-toast',
            closeButton: hasCloseButton ? 'swal-close-btn' : '',
        },
        showConfirmButton: false,
        timer: timer,
        timerProgressBar: true,
        showCloseButton: hasCloseButton,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });

}