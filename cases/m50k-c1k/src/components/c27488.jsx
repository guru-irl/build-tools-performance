import React from 'react';
const LABEL_27488 = 'component_27488';
export function Component27488({ value = 27488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27488, 'data-value': derived.doubled }, children);
}
export default Component27488;
