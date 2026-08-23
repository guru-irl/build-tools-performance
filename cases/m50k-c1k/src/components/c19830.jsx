import React from 'react';
const LABEL_19830 = 'component_19830';
export function Component19830({ value = 19830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19830, 'data-value': derived.doubled }, children);
}
export default Component19830;
