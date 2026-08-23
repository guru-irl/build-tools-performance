import React from 'react';
const LABEL_35361 = 'component_35361';
export function Component35361({ value = 35361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35361, 'data-value': derived.doubled }, children);
}
export default Component35361;
