// const urlParam = new URLSearchParams(window.location.search).get('vclid')
// // const cartBtn = document.querySelector('#cart-icon-bubble')
// const addToCart = document.querySelector('.product-form__submit')
// // const paymentBtn = document.querySelector('.shopify-payment-button__button')

// if (urlParam) sessionStorage.setItem('vclid', urlParam)

// const addOrderNote = () => {
// 	const vclid = sessionStorage.getItem('vclid')

// 	if (vclid) {
// 		setTimeout(() => {
// 			document.querySelector('textarea#CartDrawer-Note').value = vclid

// 			fetch(`${routes.cart_update_url}`, {
// 				method: "POST",
// 				headers: { "Content-Type": "application/json;charset=utf-8" },
// 				body: JSON.stringify({ note: vclid }),
// 			});
// 		}, 1500)


// 	}
// }

// // cartBtn.addEventListener('click', addOrderNote)
// if (addToCart) addToCart.addEventListener('click', addOrderNote)
// // if (paymentBtn) paymentBtn.addEventListener('click', addOrderNote)

// // if (addToCart) addToCart.addEventListener('click', debounce((event) => {
// // 	if (sessionStorage.getItem('vclid')) {
// // 		const body = JSON.stringify({ note: sessionStorage.getItem('vclid') })
// // 		document.querySelector('textarea#CartDrawer-Note').value = sessionStorage.getItem('vclid')

// // 		fetch(`${routes.cart_update_url}`, { ...fetchConfig(), ...{ body } })
// // 	}
// // }), 1500)


// https://vi23-store.myshopify.com/products/the-collection-snowboard-liquid?vclid=product-11111
// https://vi23-store.myshopify.com/?vclid=homepage-123


document.addEventListener('DOMContentLoaded', function () {
	const urlParam = new URLSearchParams(window.location.search).get('vclid')
	if (urlParam) sessionStorage.setItem('vclid', `vclid: ${urlParam}`)

	const vclid = sessionStorage.getItem('vclid')

	const addOrderNote = () => {
		// const vclid = sessionStorage.getItem('vclid')

		if (vclid) {
			setTimeout(() => {
				document.querySelector('textarea#CartDrawer-Note').value = vclid
				console.log('added');

				fetch(`${routes.cart_update_url}`, {
					method: "POST",
					headers: { "Content-Type": "application/json;charset=utf-8" },
					body: JSON.stringify({ note: vclid }),
				});
			}, 1000)

			console.log(document.querySelector('textarea#CartDrawer-Note').value);
		}
	}

	addOrderNote()

	document.addEventListener('click', function (event) {
		if (event.target.matches('.shopify-payment-button__button')) {
			addOrderNote()
		}
	})
})