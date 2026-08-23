import React from 'react';
const LABEL_27704 = 'component_27704';
export function Component27704({ value = 27704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27704, 'data-value': derived.doubled }, children);
}
export default Component27704;
