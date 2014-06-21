// Set initial quantity
$('.quantity').val(1);

// Update price when quantity changes
$('.quantity').change(function () {
    var $this = $(this),
        quantity = $this.val();
    $this.parent().find('.price').text('$' + (quantity * 10) + '.00');
});

// Remove item
$('.remove').on('click', function () {
    $(this).parent().parent().hide();
});

