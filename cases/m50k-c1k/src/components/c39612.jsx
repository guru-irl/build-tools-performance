import React from 'react';
const LABEL_39612 = 'component_39612';
export function Component39612({ value = 39612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39612, 'data-value': derived.doubled }, children);
}
export default Component39612;
