import React from 'react';
const LABEL_12351 = 'component_12351';
export function Component12351({ value = 12351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12351, 'data-value': derived.doubled }, children);
}
export default Component12351;
