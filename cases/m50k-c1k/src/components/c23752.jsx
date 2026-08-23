import React from 'react';
const LABEL_23752 = 'component_23752';
export function Component23752({ value = 23752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23752, 'data-value': derived.doubled }, children);
}
export default Component23752;
