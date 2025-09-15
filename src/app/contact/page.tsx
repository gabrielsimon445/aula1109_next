import AddressForm from "@/components/layout/contactLayout/addressForm";
import ContactForm from "@/components/layout/contactLayout/contactForm";
import ContactSection from "@/components/layout/contactLayout/contactSection";

export default function Contact () {
    return (
        <section className="bg-slate-600 p-10">
        <ContactSection />
        <ContactForm/>
        <AddressForm/>
        </section>
    )
}