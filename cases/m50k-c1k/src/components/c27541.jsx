import React from 'react';
const LABEL_27541 = 'component_27541';
export function Component27541({ value = 27541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27541, 'data-value': derived.doubled }, children);
}
export default Component27541;
