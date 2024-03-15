<template>
  <footer
    class="flex flex-1 items-center justify-center bg-gradient-to-r from-[#c12f1d] to-[#e84142] text-white w-full"
  >
    <section class="max-w-6xl w-full mx-auto p-6">
      <div class="grid grid-cols-7 mt-10">
        <div class="col-span-1">
          <img
            class="bg-white rounded-md py-1.5"
            alt="black and white logo"
            src="~/assets/nubex_logo.png"
            width="90"
          />

          <div class="mt-10">
            <span
              class="font-semibold text-xs uppercase tracking-wider text-blackt"
            >
              Follow Us _
            </span>
            <div class="pl-8 mt-3 flex flex-col space-y-2">
              <a href="#" target="_blank">
                <IconFacebook class="h-4 w-4" />
              </a>
              <a href="#" target="_blank">
                <IconLinkedIn class="h-4 w-4" />
              </a>
              <a href="#" target="_blank">
                <IconInstragram class="h-4 w-4" />
              </a>
              <a href="#" target="_blank">
                <IconTwitter class="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div class="col-span-6 pt-8">
          <div class="flex flex-col">
            <p
              class="text-center text-gray-50 text-xl font-medium tracking-wider mb-12 italic font-rs"
            >
              Transforming tomorrow's leaders today: Envision, Explore, Excel at
              Nubex College
            </p>
            <div class="flex flex-row justify-between space-x-2 px-8 mt-4">
              <section class="grid grid-cols-3 gap-3">
                <div class="col-span-1">
                  <p
                    class="mb-4 text-gray-50 font-semibold tracking-wider text-lg"
                  >
                    Quick Links
                  </p>
                  <ul>
                    <li>
                      <a
                        href="/admissions/how-to-apply"
                        class="text-sm font-medium text-gray-50 tracking-wide leading-6"
                      >
                        How to apply
                      </a>
                    </li>
                    <li>
                      <a
                        href="/admissions/fees"
                        class="text-sm font-medium text-gray-50 tracking-wide leading-6"
                      >
                        Courseand Administrative Fees
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about-us/covid-update"
                        class="text-sm font-medium text-gray-50 tracking-wide leading-6"
                      >
                        Covid Update
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-span-1">
                  <p
                    class="mb-4 text-gray-50 font-semibold tracking-wider text-lg"
                  >
                    Our Courses
                  </p>
                  <ul>
                    <li>
                      <a
                        href="#"
                        class="text-sm font-medium text-gray-50 tracking-wide leading-6"
                      >
                        Diploma of Leadership Management
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-sm font-medium text-gray-50 tracking-wide leading-6"
                      >
                        Advance Diploma of Leadership Management
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-span-1">
                  <p
                    class="mb-4 text-gray-50 font-semibold tracking-wider text-lg"
                  >
                    Our Campus
                  </p>
                  <p class="flex flex-row space-x-2 items-center">
                    <IconPhoneCall class="h-4 w-4 -mt-1" />
                    <a
                      href="tel:0426 000 956"
                      class="text-sm font-medium text-gray-50 tracking-wide leading-6"
                    >
                      0426 000 956
                    </a>
                  </p>
                  <p class="flex flex-row space-x-2 items-center">
                    <IconEmail class="h-4 w-4 -mt-1" />
                    <a
                      href="mailto:nubexcollege@gmail.com"
                      class="text-sm font-medium text-gray-50 tracking-wide leading-6"
                    >
                      nubexcollege@gmail.com
                    </a>
                  </p>
                  <p class="flex flex-row space-x-2">
                    <IconMapMarker class="h-7 w-7 -mt-1" />
                    <span
                      class="text-sm font-medium text-gray-50 tracking-wide leading-6"
                    >
                      13C, 35-37 Railway Parade, Engadine NSW 2233 Australia
                    </span>
                  </p>
                </div>
              </section>
            </div>
            <div
              class="border-t border-opacity-30 border-gray-800 py-2 px-4 mt-12"
            >
              <div class="flex flex-row justify-between mb-6">
                <span></span>
                <div class="text-gray-50 tracking-wider font-mono">
                  <p class="text-xs">ABN: 22 666 035 730</p>
                  <p class="text-xs">RTO Code: XXXXX</p>
                </div>
              </div>
              <p class="text-xs text-gray-800 font-mono -mb-5">
                Developed by
                <a href="https://www.ampersand.au" target="_blank">
                  Ampersand Lab
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>
