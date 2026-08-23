import React from 'react';
const LABEL_27289 = 'component_27289';
export function Component27289({ value = 27289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27289, 'data-value': derived.doubled }, children);
}
export default Component27289;
