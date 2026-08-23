import React from 'react';
const LABEL_27900 = 'component_27900';
export function Component27900({ value = 27900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27900, 'data-value': derived.doubled }, children);
}
export default Component27900;
