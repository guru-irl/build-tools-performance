import React from 'react';
const LABEL_24846 = 'component_24846';
export function Component24846({ value = 24846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24846, 'data-value': derived.doubled }, children);
}
export default Component24846;
