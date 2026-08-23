import React from 'react';
const LABEL_12471 = 'component_12471';
export function Component12471({ value = 12471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12471, 'data-value': derived.doubled }, children);
}
export default Component12471;
