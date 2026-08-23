import React from 'react';
const LABEL_20493 = 'component_20493';
export function Component20493({ value = 20493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20493, 'data-value': derived.doubled }, children);
}
export default Component20493;
