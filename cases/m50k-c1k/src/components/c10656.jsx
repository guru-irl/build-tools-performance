import React from 'react';
const LABEL_10656 = 'component_10656';
export function Component10656({ value = 10656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10656, 'data-value': derived.doubled }, children);
}
export default Component10656;
