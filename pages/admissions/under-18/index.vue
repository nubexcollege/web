<template>
  <section class="w-full max-w-screen-xl mx-auto flex flex-col mb-10">
    <Breadcrumbs :links="breadcrumbs" />

    <div class="mt-4 font-thin">
      <h1 class="font-medium text-xl mb-2 text-gray-900">
        Information For International Students Under 18 Years Of Age
      </h1>
      <p>
        The Department of Home Affairs requires students under the age of 18 to
        have appropriate accommodation and welfare arrangements while studying
        in Australia. It is a condition of a Student Visa that these
        arrangements be maintained. Failure to do so can result in visa
        cancellation. Nubex has responsibilities to make sure arrangements are
        in place for students under 18. Please refer to our Handbook for more
        information. Students who will be under 18 when they begin studying at
        Skyline International College have two options for their accommodation
        and welfare arrangements.
      </p>
    </div>

    <div class="font-thin">
      <p class="font-medium mt-4 mb-2">
        Students stay in an accommodation and welfare arrangement approved by
        the Department of Home Affairs
      </p>
      <p class="mb-2">
        Under Option 1, Nubex College does not issue the "Confirmation of
        Appropriate Accommodation and Welfare" letter (CAAW), as the
        accommodation and welfare arrangements are approved directly by the
        Department of Home Affairs. Typically, this means the student will be
        living in Australia with a parent or adult relative. Refer to the
        Department of Home Affairs for more information on Student Guardian
        Visas and other visa options. For the College records, where students
        and their families select Option1, they must supply the following
        documents to the College Evidence that an applicant under 18 can be
        granted a visa (Signature Verifiable Document of Parents)
      </p>

      <ol>
        <li>
          1. Personal Particulars for character assessment - Online Form 80 (Of
          the Nominated Relative).
        </li>
        <li>2. Certified copy of your birth certificate</li>
        <li>
          3. Welfare Arrangements - Evidence of relationship to nominated
          relative
        </li>
        <li>
          4. Welfare arrangements along with ID proof of the nominated relative.
        </li>
        <li>
          5. Welfare arrangements - overseas penal clearance for nominated
          relative.
        </li>
        <li>
          6. Nominated relative- Character Requirements-Australian Federal
          Police (AFP), National Police Check (Complete Disclosure).
        </li>
      </ol>
    </div>

    <div class="font-thin">
      <p class="font-medium mt-4 mb-2">
        Students stay in an accommodation and welfare arrangement approved by
        Nubex College
      </p>
      <p class="mb-2">
        Under Option 2, the student must have an arrangement with an approved
        carer service and a confirmed place in an approved homestay. Nubex will
        issue a "Confirmation of Appropriate Accommodation and Welfare" letter
        (CAAW) which can be used for an application for a student visa. It is
        important that students who are under 18 do not arrive in Australia
        before the date nominated on their CAAW confirmation letter (unless
        accompanied by a parent), as this can result in their visa being
        cancelled.
      </p>

      <ol>
        <li>
          1. You, or your agent, should contact SIC Admissions, who will send
          you some forms and information for under 18 international students and
          communicate with you to set up and approve the accommodation and
          welfare services. SIC Admissions will be the continuing people who
          manage the accommodation and welfare arrangements for under 18's at
          our College.
        </li>
        <li>
          2. You or your agent should contact SIC Admissions to arrange a
          confirmed accommodation place. Here is the website link for the
          approved accommodation provider: Australian Homestay Network AHN
          (homestay) (hyper link)
        </li>
        <li>
          3. When the approved accommodation and welfare arrangements are in
          place, we will issue the CAAW letter to you.
        </li>
      </ol>

      <p>
        4. For additional information, please refer to the International
        Students Under 18 years Policy at the SIC website or contact SIC
        Admissions.
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { IBreadcrumbLink } from '~/contracts/IBreadcrumbLink';

const breadcrumbs: Array<IBreadcrumbLink> = [
  { name: 'Admissions', href: '/admissions' },
  { name: 'Under 18' },
];
</script>
