import React from 'react';
const LABEL_12989 = 'component_12989';
export function Component12989({ value = 12989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12989, 'data-value': derived.doubled }, children);
}
export default Component12989;
