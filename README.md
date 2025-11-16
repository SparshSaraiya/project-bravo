# project-bravo
Expense Tracker application for CSC-131 Project 01 (Group Bravo)
import java.util.ArrayList;
import java.util.List;

public class Person {
    //instance variables
    private int userID;
    private String accountName;
    private String emailAddress;

    private String passwordHash;

    private List<Integer> transactionIds; //either make this global or put in constructor?

	//adding this to help with the admin class
	List<Person> users;

    //contruscter
    public Person(int userID, String accountName, String emailAddress, String passwordHash) {
        this.userID = userID;
        this.accountName = accountName;
        this.emailAddress = emailAddress;
        this.passwordHash = passwordHash;
        this.transactionIds = new ArrayList<>();
		this.users = new ArrayList<>();
    }
    
    
    //manage IDs for transactions
    public void addTransactionId(int transactionId) {
        if (!transactionIds.contains(transactionId)) {
            transactionIds.add(transactionId);
        }
    }

    //getters
    public int getUserId() {
        return userID;
    }

    public String getAccountName() {
        return accountName;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public List<Integer> getTransactionIds() {
        return transactionIds;
    }
	//adding setEntry + setters
	public void setUserID(int uid){
		this.userID = uid;
	}
	public void setAccountName(String accn){
		this.accountName = accn;
	}
    public void setEmailAddress(String ema){
		this.emailAddress = ema;
	}
	public void setPasswordHash(String pass){
		this.passwordHash = pass;
	}
	//the setEntry to help with admin
	public void setEntry(int uid, String accn, String ema, String pass){
		this.userID = uid;
		this.accountName = accn;
		this.emailAddress = ema;
		this.passwordHash = pass;
	}
	//delete entry needed
	public void deleteEntry(int uid, String accn, String ema, String pass){
		users.remove(uid, accn, ema, pass);
	}
    @Override
    public String toString() {
		//adds this to help with admin
		users.add(userID, accountName, emailAddress, passwordHash);
        return "Person{" +
                "userId=" + userID +
                ", fullName='" + accountName + '\'' +
                ", email='" + emailAddress + '\'' +
                '}';
    }
}

public class Admin extends Person {
	Person admin;
	public Admin(int userID, String accountName, String emailAddress, String passwordHash){
		super(userID, accountName, emailAddress, passwordHash);
	}
	public void login(int userID, String accountName, String emailAddress, String passwordHash){ //to see the entry
		
		admin = new Person(int userID, String accountName, String emailAddress, String passwordHash);
		admin.toString();
		system.out.println("all the user account entries are: ");
		for (int i = 0; i < users; i++){
			users.toString();
			System.out.println("\n ****************** \n"); //creating a user arraylist to get individual people
		}
	}
	public void editEntry(int transactionID, int userID, String accountName, String emailAddress, String passwordHash){
		if (TransactionsID.contains(transactionID)){
			admin.setEntry(userID, accountName, emailAddress, passwordHash);  //needing set entry
		}
		else{
			System.out.println("account or entry doesn't exist");
		}
	}
	public void searchEntry(int userID, String accountName, String emailAddress, String passwordHash){
		if (TransactionsID.contains(transactionID)){
			admin.toString();
		}
		else{
			System.out.println("account or entry doesn't exist");
		}
	}
}
