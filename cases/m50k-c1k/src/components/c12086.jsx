import React from 'react';
const LABEL_12086 = 'component_12086';
export function Component12086({ value = 12086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12086, 'data-value': derived.doubled }, children);
}
export default Component12086;
