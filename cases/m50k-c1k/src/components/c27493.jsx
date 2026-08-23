import React from 'react';
const LABEL_27493 = 'component_27493';
export function Component27493({ value = 27493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27493, 'data-value': derived.doubled }, children);
}
export default Component27493;
