TableExport from: Aaron https://github.com/shdwjk/Roll20API/blob/master/TableExport/TableExport.js

This script allows you to import and export Tables from Roll20 to make public, or give other users the ability to port to their game

Let's Say I have a table called "MoodRing" that I want to export

!export-table --ring

which will output these commands:

!import-table --Mood-Ring --show
!import-table-item --Mood-Ring --[Black] Stressed --1 --
!import-table-item --Mood-Ring --[Red] Fear --1 --
!import-table-item --Mood-Ring --[Yellow] Nervous --1 --
!import-table-item --Mood-Ring --[Green] Romance --2 --
!import-table-item --Mood-Ring --[Blue] Normal --10 --
!import-table-item --Mood-Ring --[Lapis] Relaxed --5 --
!import-table-item --Mood-Ring --[Navy] Calm --3 --
!import-table-item --Mood-Ring --[Purple] Cool --4 --
!import-table-item --Mood-Ring --[Pink] Lovable --7 --
!import-table-item --Mood-Ring --[Orange] Passion --2 --


You can now copy and paste these commands into the chat of another campaign with this script to import this Rollable Table.

If we break this down a little bit

!import-table --Mood-Ring

this command creates the table

!import-table-item --Mood-Ring --[Black] Stressed --1 --

This will add an entry to --Mood-Ring called [Black] Stressed with a weight of 1

This also allows you to build your tables externally and then use RegEx to transform them into the proper format.
