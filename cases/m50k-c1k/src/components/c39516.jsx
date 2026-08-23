import React from 'react';
const LABEL_39516 = 'component_39516';
export function Component39516({ value = 39516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39516, 'data-value': derived.doubled }, children);
}
export default Component39516;
