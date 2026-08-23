import React from 'react';
const LABEL_24678 = 'component_24678';
export function Component24678({ value = 24678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24678, 'data-value': derived.doubled }, children);
}
export default Component24678;
