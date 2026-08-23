import React from 'react';
const LABEL_35527 = 'component_35527';
export function Component35527({ value = 35527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35527, 'data-value': derived.doubled }, children);
}
export default Component35527;
