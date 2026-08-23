import React from 'react';
const LABEL_45378 = 'component_45378';
export function Component45378({ value = 45378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45378, 'data-value': derived.doubled }, children);
}
export default Component45378;
