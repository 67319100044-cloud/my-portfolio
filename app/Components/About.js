export default function About({ name }) {
  return (
    <section className="py-4 px-8">
      <h2 className="text-3xl font-bold mb-4">เกี่ยวกับฉัน</h2>
      <p className="max-w-3xl text-lg leading-8 text-slate-700">
        ผมชื่อ{name} เป็นนักศึกษาสาขาเทคโนโลยีธุรกิจดิจิทัล ชั้นปีที่ 1
      </p>
    </section>
  );
}
