import React from 'react';
const LABEL_45362 = 'component_45362';
export function Component45362({ value = 45362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45362, 'data-value': derived.doubled }, children);
}
export default Component45362;
