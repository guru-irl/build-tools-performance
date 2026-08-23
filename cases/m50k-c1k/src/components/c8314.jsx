import React from 'react';
const LABEL_8314 = 'component_8314';
export function Component8314({ value = 8314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8314, 'data-value': derived.doubled }, children);
}
export default Component8314;
