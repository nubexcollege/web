<template>
  <section class="w-full max-w-screen-xl mx-auto flex flex-col">
    <Breadcrumbs :links="breadcrumbs" />

    <div class="mt-4 mb-8 font-thin">
      <h1 class="font-semibold text-2xl mb-2">
        I. COVID-19 Situation in Australia
      </h1>

      <div class="flex flex-col space-y-2">
        <p>
          On December 15, 2021, the borders of Australia finally opened up for
          international students without needing to apply for travel exemptions.
          This includes fully vaccinated international students and Temporary
          Graduate visa holders.
        </p>

        <p>
          In Australia, states and territories have their own rules and
          restrictions in place. Some require approval to travel across the
          border from New South Wales (NSW) or a period of self-isolation in NSW
          before entering the state. Sometimes, a second self-isolation period
          is required when you arrive. Check
          <a
            href="http://https://www.nsw.gov.au/covid-19/travel/international-arrivals"
            target="_blank"
            rel="noopener noreferrer"
            class="font-medium tracking-tight text-[#bead01]"
          >
            here
          </a>
          for more information on international air travel to and from NSW.
        </p>

        <p>
          It is important to check the rules and requirements of the
          jurisdiction you are travelling to before you travel. This ensures
          that you are not caught unawares or denied entry when you reach the
          border.
        </p>

        <p>
          Quarantine and testing arrangements for states and territories are
          constantly changing. All travellers will need to meet the Australian
          Government border requirements for state or territory quarantine and
          testing requirements.
        </p>

        <p>
          Find more information on
          <a
            href="http://studyaustralia.gov.au/english/latest-travel-and-visa-advice/updates/travel-and-visas"
            target="_blank"
            rel="noopener noreferrer"
            class="font-medium tracking-tight text-[#bead01]"
          >
            Study Australia's Website </a
          >.
        </p>
      </div>

      <h1 class="font-semibold text-2xl mt-4 mb-2">
        II. How Classes are Delivered in Nubex College?
      </h1>

      <p>
        In accordance with Nubex's COVID-19 Safety Plan, weekly class
        activities, training/assessment activities, and other forms of teaching
        and learning will be delivered in face to face and online methods.
      </p>

      <h1 class="font-semibold text-2xl mt-4 mb-2">
        III. Information for international students returning to Sydney and NSW
      </h1>

      <div class="flex flex-col space-y-2">
        <p>
          As of 23 Feb 2022, fully vaccinated and eligible visa holders
          including international students can return to Australia without
          having to apply for a travel exemption.
        </p>

        <p>
          However, there are a few requirements returning international students
          must fulfil. These are:
        </p>

        <ol class="ml-8 list-decimal">
          <li>
            Check your visa status via the
            <a
              href="http://https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/check-conditions-online"
              target="_blank"
              rel="noopener noreferrer"
              class="font-medium tracking-tight text-[#bead01]"
            >
              VEVO website.
            </a>
          </li>
          <li>
            You should have received a full dose of a COVID-19 vaccine approved
            or recognised by the Therapeutic Goods Administration (TGA).
          </li>
          <li>Proof of your vaccination status; and</li>
          <li>
            A negative accepted COVID-19 test result. These tests can be either
            a COVID-19 PCR or other Nucleic Acid Amplification Test (NAAT) taken
            within 3 days before your flight's scheduled departure. Or a medical
            certificate as proof of a negative Rapid Antigen Test taken under
            medical supervision within 24 hours before your flight's scheduled
            departure.
          </li>
        </ol>

        <p>
          Finally, all travellers must complete the Australia Travel Declaration
          form prior to departure - more information
          <a
            href="https://www.homeaffairs.gov.au/covid19"
            target="_blank"
            rel="noopener noreferrer"
            class="font-medium tracking-tight text-[#bead01]"
          >
            here.
          </a>
        </p>
      </div>

      <p class="text-xl font-semibold mt-4 mb-2">
        Key important points to remember
      </p>

      <ul class="ml-8 list-disc">
        <li>
          International travellers arriving in NSW must take a
          <a
            href="https://www.nsw.gov.au/covid-19/stay-safe/testing/how-testing-works/rapid-antigen-self-tests-for-community"
            target="_blank"
            rel="noopener noreferrer"
            class="font-medium tracking-tight text-[#bead01]"
          >
            rapid antigen test (RATs) approved in Australia
          </a>
          within 24 hours of arriving in NSW and isolate until they receive a
          negative result. A follow up rapid antigen test is required on or
          after day 6 after arriving in NSW.
        </li>
        <li>
          A test on day 12 is strongly recommended. Please see the approved list
          of RATs on the
          <a
            href="https://www.tga.gov.au/covid-19-rapid-antigen-self-tests-are-approved-australia"
            target="_blank"
            rel="noopener noreferrer"
            class="font-medium tracking-tight text-[#bead01]"
          >
            Therapeutic Goods Administration website </a
          >.
        </li>
        <li>
          When preparing to travel, check what you need to do if you are leaving
          Australia or arriving from overseas.
        </li>
      </ul>

      <p class="my-2">
        This information is updated as of 02-05-2022, For the latest info please
        visit
        <a
          href="https://www.study.nsw.gov.au/travel-advice/pre-departure"
          target="_blank"
          rel="noopener noreferrer"
          class="font-medium tracking-tight text-[#bead01]"
        >
          Pre-departure and arrival information - Study NSW
        </a>
        and the Covid-19 Home Affairs Office.
      </p>

      <p>
        If you test covid positive while in NSW, Managing Covid-19 at Home from
        the NSW Government is a good resource to read.
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { IBreadcrumbLink } from '~/contracts/IBreadcrumbLink';

const breadcrumbs: Array<IBreadcrumbLink> = [
  { name: 'About Us', href: '/about-us' },
  { name: 'Covid Update' },
];
</script>
