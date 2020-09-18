// For full API documentation, including code examples, visit https://wix.to/94BuAAs
import wixUsers from 'wix-users';
import wixLocation from 'wix-location';



wixUsers.onLogin( (user) => {

	wixLocation.to("https://www.evrcare.co/account/your-details");


} );
