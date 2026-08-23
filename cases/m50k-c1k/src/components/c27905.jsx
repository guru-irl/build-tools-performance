import React from 'react';
const LABEL_27905 = 'component_27905';
export function Component27905({ value = 27905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27905, 'data-value': derived.doubled }, children);
}
export default Component27905;
