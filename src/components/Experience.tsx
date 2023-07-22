import { Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

import { experiences } from "@/constants";
import { IExperience } from "@/interfaces";

const Experience = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-2xl lg:mx-0"
        >
          <motion.h2
            initial={{ color: "#FFFFFF" }}
            whileInView={{ color: "#489FB5" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Experience
          </motion.h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Some of the projects I have worked on.
          </p>
        </motion.div>

        <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-8 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {experiences.map(
            ({
              id,
              title,
              description,
              date,
              company,
              github,
            }: IExperience) => (
              <article key={id} className="flex max-w-xl flex-col items-be">
                <div className="flex justify-between items-center gap-x-4 text-xs">
                  <div className="space-x-4">
                  <span className="text-gray-500">{date}</span>
                  <span className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {company}
                  </span>
                  </div>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600">
                        <span className="sr-only">Open options</span>
                        <BsThreeDotsVertical
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          {github.map(({ href, name }) => (
                            <Menu.Item key={name}>
                              <Link
                                href={href}
                                className="flex px-4 py-2 text-sm text-neutral-800 bg-white hover:text-neutral-600 hover:bg-neutral-100 transition-colors duration-300"
                                target="_blank"
                              >
                                <AiFillGithub
                                  className="mr-3 h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span>Ver {name}</span>
                              </Link>
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
                <div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">
                    {description}
                  </p>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
