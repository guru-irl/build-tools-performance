import React from 'react';
const LABEL_35280 = 'component_35280';
export function Component35280({ value = 35280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35280, 'data-value': derived.doubled }, children);
}
export default Component35280;
