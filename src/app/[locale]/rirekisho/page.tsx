import Education from './components/education/index';
import PersonalInfos from './components/personal-infos/index';

export default function Rirekisho() {
  return (
    <section className='flex flex-col gap-y-2 bg-slate-50 dark:bg-slate-900'>
      <PersonalInfos />

      <Education />

      <div className='bg-violet-400'>
        <p>qualification</p>
        <p>qualification</p>
        <p>qualification</p>
      </div>

      <div className='bg-red-400'>
        <p>special skills</p>
        <p>special skills</p>
        <p>special skills</p>
      </div>

      <div className='bg-gray-400'>
        <p>personal preferences</p>
        <p>personal preferences</p>
        <p>personal preferences</p>
      </div>
    </section>
  );
}
