import React from 'react';
const LABEL_19678 = 'component_19678';
export function Component19678({ value = 19678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19678, 'data-value': derived.doubled }, children);
}
export default Component19678;
