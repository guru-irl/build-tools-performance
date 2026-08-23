import React from 'react';
const LABEL_27902 = 'component_27902';
export function Component27902({ value = 27902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27902, 'data-value': derived.doubled }, children);
}
export default Component27902;
