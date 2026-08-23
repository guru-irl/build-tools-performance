import React from 'react';
const LABEL_12046 = 'component_12046';
export function Component12046({ value = 12046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12046, 'data-value': derived.doubled }, children);
}
export default Component12046;
