import React from 'react';
const LABEL_23725 = 'component_23725';
export function Component23725({ value = 23725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23725, 'data-value': derived.doubled }, children);
}
export default Component23725;
