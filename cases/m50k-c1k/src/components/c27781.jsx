import React from 'react';
const LABEL_27781 = 'component_27781';
export function Component27781({ value = 27781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27781, 'data-value': derived.doubled }, children);
}
export default Component27781;
