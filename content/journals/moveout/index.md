---
title: "Moving Out: A Writeup"
date: 2020-12-22T12:26:15-05:00
author: Mingjie Jiang
featured: false
draft: false
weight: 100
"journals/tags": [resources, updates]
---

Execute Big founded over a year ago under a fiscal sponsor, and one year later, we decided to become an independent non-profit organization. We’ve come a long way, and while we are not currently able to do much under the pandemic, we believe that there are still tons of potential for Execute big to grow.

More recently, I received quite a few questions from fellow student leaders about founding their own nonprofit organizations, and through this journal, I hope to be able to answer these questions about the decision-making process behind entity-forming, and the process that of.

{{< announcement content="<p class='title'>This is not a how-to guide.</p> For detailed advice on registering your own entity, managing your assets, and keeping your books, please consult a legal or accounting professional. This writeup is also specific to U.S. based charities &mdash; legal structures of different countries may vary." class="danger" >}}

# A Reminder: Why?

I’m a firm believer that a good non-profit organization (or any initiative) should maintain a strong balance between three core elements: mission, character, and skillset.

Character and skillset: your team should consist of the right people to do the right thing. Your personalities should be compatible to work together over a very long period of time, and your abilities should almost perfectly complement one another to create a well-rounded “skill-tree”. These are quite trivial — you either have them, or you don’t.

Mission: There is a general trend of student founders trying to create organizations while having no idea what they are trying to achieve (as I mentioned in my Transparency piece). If you are trying to start an initiative, I would encourage you to answer this question within 30 seconds: in a tweet, explain why you are the best person to start an initiative to solve the problem you are trying to solve. Your ability to answer this question should be a clear indicator of whether you actually understand your mission.

# The Process

## 0. A Headstart

I cannot explain how much appreciate the existence of fiscal sponsors to help new founders, especially students, launch projects, especially now that I have gone through the legal process of founding an entity. **We recommend all student founders to start as a fiscally sponsored entity — either through Hack Club Bank or other registered fiscal sponsors.** It costs you virtually nothing (your fiscal sponsor will usually take only 7-15% of your revenue for their platform, and there’s no monthly fee; therefore, if your idea doesn’t run well, there’s no cost to you), and you’ll be given enough time to test your idea and pilot your programs.

Don’t rush towards independence until you have a solid year of operations and a stable source of revenue to power your programs.

## 1. Planning

### 1.1. Thinking

Sit down with your co-founders and make sure you’re completely settled on the idea of moving out. Do not rush that conversation — once you’re out there on your own, there will be no backups. That is —

- If you are an event, and one of your sponsors delayed their payment to your bank, nobody will be able to front that money for you, so you’ll have to front that out of your own pocket;
- You’ll have to find your own banking provider, and most banks are not exactly tailored to tiny nonprofits like yours;
- All the services that you might have been taking for granted from your fiscal sponsor is no longer there, and you’ll have to figure these out by yourself: a reimbursement process, pre-built donation pages, pre-configured Google Workspace setups...

For us, we created a table of services that we depend on at Hack Club Bank and listed all the potential alternatives that we may be able to switch to after we move out. Also, do some research for their costs — software platforms are not cheap, but a lot of companies may provide discounts for charities.

![Alternatives Table (some information redacted due to vendor agreements)](images/alternatives.png)

### 1.2. Setting Things Up

You'll likely need a physical address somewhere in your home state as the business address of your organization. You can apply for a P.O. Box at your local post office (note that you may not be able to use the P.O. Box address as your principal business address on legal documents), or you can rent a virtual mailbox; either will cost you around $120 per year.

We also made sure that we have someone to direct potential questions to -- either someone who has previously gone through the process before or an accountant/lawyer who knows about the process.

## 2. Getting Registered

There are multiple levels of registration that you'll have to go through to set yourself up as a functioning public charity.

### 2.1. Incorporating in a State

First, you'll need to get incorporated in one of the states. We chose Maryland because that is where I am physically based (at least for this year), and it'll be easier for us to get our filings in. Most states will require you to have a "registered agent" that resides within the state, however, that person can usually be anyone — as long as they are always here to receive any legal documents. However, different states will have different filing requirements. You should look up the specific filing requirements of your state by looking around the website of your state's Secretary of State.

You're usually registering something that looks like "Non-stock Corporation" or "Not-for-Profit Corporation", which means you and your co-founders may not benefit from the assets of your company. In Maryland, the registration fee was $223, which includes the base filing fee of $170, a mandatory $50 expedition fee, plus a $3 eCheck charge. Other states' filing charges will vary, but they should be within that range.

### 2.2. Applying for Tax Exempt Status

The next step is to apply for a federal tax exemption status. If you are starting a publicly-funded nonprofit organization, you are very likely going to apply to be a tax-exempt organization under IRS Section 501(c)(3). A small organization like yours may be eligible to file with Form 1023-EZ, which is faster, cheaper, and requires less information than the full Form 1023. To determine your eligibility and file, you should complete the [Form 1023-EZ Eligibility Worksheet](https://www.irs.gov/instructions/i1023ez#en_US_201709_publink10006530:~:text=earlier.-,Form%201023%2DEZ%20Eligibility%20Worksheet).

It should also be noted that according to the IRS website, "organizations with annual gross revenue below $5,000" are exempt from filing Form 1023. However, that also means that you will not receive a formal federal tax-exemption status.

Prior to filing form 1023/1023-EZ, we also did a full run-through of everything that we have. Your organization should have written bylaws, articles of incorporation, as well as other organizing documents (if you have no idea how to prepare these documents, you should probably consult a professional). You should also consider writing a formal mission statement for your organization (also as a refresher on why you are starting the nonprofit). Make sure your mission statement is specific! For example, this is our mission statement:

> _We remove barriers to entry into technology to enable all students, with a focus on underrepresented demographics, to experience and explore computer science education by building CS education programs and providing grants for students in need._

It will cost you $275 to file for Form 1023-EZ, and the turnaround time is approximately a few months if everything goes well (we filed at the end of July and received our hard-copy determination letter in late October). If, for some reason, you are going to file for Form 1023 instead, your cost would be $600, and the turnaround will likely be over a year long.

### Total Registration Cost

| Item                                        | Recurring? | Cost        | Varies |
| ------------------------------------------- | ---------- | ----------- | ------ |
| Articles of Incorporation                   | No         | $223.00     | Yes    |
| Certified Copy of Articles of Incorporation | No         | $43.26      | Yes    |
| IRS 1023-EZ                                 | No         | $275.00     | No     |
| Virtual Mailbox / P.O. Box                  | Yes (Year) | $120.00     | Yes    |
| **Total**                                   |            | **$661.26** |        |

Again, this amount may vary depending on where you are filing.

## 3. Getting Up and Running

Once you receive the determination letter from the IRS, you're ready to go! This section will showcase some of the things that we are currently using to make Execute Big work.

### 3.1. Finances: Mercury + Stripe

We use [Mercury](https://mercury.com) as our banking platform. There are a lot of traditional banks out there, but almost all of them places very specific requirements on small business checking accounts. In a lot of cases, we will either need to maintain a minimum balance or have to pay a flat monthly fee to open an account. A few examples:

| Bank            | Type                               | Fee    | Monthly Min | Daily Min | Transaction Limit |
| --------------- | ---------------------------------- | ------ | ----------- | --------- | ----------------- |
| Bank of America | Business Fundamentals®             | $15/mo | $5,000      | $3,000    | 200 + $.45/extra  |
| Wells Fargo     | Initiate Business Checking         | $10/mo | $1,000      | $500      | 100 + $.50/extra  |
| Capital One     | Spark Business Basic Checking®     | $15/mo | $2,000      | -         | -                 |
| Citi            | CitiBusiness® Streamlined Checking | $15/mo | $5,000      | -         | $250              |
| PNC             | Business Checking                  | $10/mo | $500        | -         | 150 + $.50/extra  |

If you don't think that you'll meet any of the fee-waiving requirements for these traditional banks, I highly recommend that you look into more modern solutions like Mercury (not sponsored). Here's a screenshot of our Mercury dashboard, along with some annotations on its features. It is completely free, and although you don't earn interest, there are practically no limits to what you can do with your cash. 

![Mercury Bank Interface](images/mercury.jpg)

We use Stripe to handle payments like donations. Stripe usually charges a 2.9% + 30¢ fee for each transaction, but as a nonprofit, you will very likely be able to negotiate for a fee reduction.

### 3.2. Other Considerations

At this moment, Execute Big is completely functional. But there are still a few more things to consider:

1. **Legal filing**: You will need to make sure your organization is in good standing with the state and the IRS, which requires you to file legal documents and reports annually. You will also be required to register with every state that you are going to publicly solicit in.

2. **Reimbursement**: Software like Expensify can be expensive for a small organization, but you can always handle it manually. Make sure to maintain a standard procedure in reporting these expenses (and as always, keep your receipts).

3. **Be transparent**: This is a personal ask -- as a publicly-funded charity, you should always hold yourself accountable for how you are using your money. We made Execute Big as [transparent](/transparency) as we can, and we hope you'll join us on this journey as well.

4. **Learn as you go**: We didn't know anything about starting our own nonprofit when we started, and we learned everything that we are able to share today through our own experiences. This is a great opportunity for you to learn how the government system works (and if you are younger, you'll also learn a lot about taxes). 

# Conclusion

If you've decided to become an independent organization, that means you have grown quite a bit during your trial operations. Ride on that momentum, and keep yourself in check! At Execute Big, we take notes during every call to list out our progress of the week and set expectations for the next.  

![Notion: Call Summary, 11/17/2020](images/call.png)

Whether you are currently running as a fiscally sponsored organization, or if you have already moved out, I hope that you will continue creating impact towards the causes that you care about. Best of luck! 

---
### Acknowledgements

_Special thanks to our friends Joy and Rick for supporting us during this process, and the team at Hack Club Bank -- specifically Chaleb -- for being extremely helpful._