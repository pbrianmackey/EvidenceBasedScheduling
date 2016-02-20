#Evidence Based Scheduling

This is an Excel Macro program that helps project when a milestone/release will be completed.  The program is intended for use by Agile teams that are or intend to track team velocity.

Input a set of actual velocities your team has taken over time.  Then give the estimated size of the next major milestone.  This application will tell you the projected time it will take to complete the milestone.


##Usage

####Open the excel file in this project: EBSv2.xlsm

EBSv2.xlsm is an Excel Macro enabled document.  Open EBSv2.xlsm and input:

- Comma seperated actual team sprint velocities taken over time
- Length of a sprint in weeks
- Anticipated size of the next release/milestone

Results will be printed in Column F:

![Sample Excel Output](https://github.com/pbrianmackey/EvidenceBasedScheduling/blob/master/SampleOutput.png)

####Important notes

Although the algorithm does reach "100%" probability, we can never truly know if a project will actually complete by a certain deadline.  I am considering changing "100%" to "statistically it doesn't make sense to calculate beyond this point"...or something.  I'm open to suggetisions/improvements and code submissions.

####Other

There is a javascript based version of [this application](https://jsfiddle.net/smacky311/ppufntd2/) available on jsfiddle.
