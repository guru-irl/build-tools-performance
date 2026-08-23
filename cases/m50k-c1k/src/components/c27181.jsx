import React from 'react';
const LABEL_27181 = 'component_27181';
export function Component27181({ value = 27181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27181, 'data-value': derived.doubled }, children);
}
export default Component27181;
