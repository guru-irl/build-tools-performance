import React from 'react';
const LABEL_27400 = 'component_27400';
export function Component27400({ value = 27400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27400, 'data-value': derived.doubled }, children);
}
export default Component27400;
