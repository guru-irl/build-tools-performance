import React from 'react';
const LABEL_12318 = 'component_12318';
export function Component12318({ value = 12318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12318, 'data-value': derived.doubled }, children);
}
export default Component12318;
