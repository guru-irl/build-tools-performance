import React from 'react';
const LABEL_16858 = 'component_16858';
export function Component16858({ value = 16858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16858, 'data-value': derived.doubled }, children);
}
export default Component16858;
