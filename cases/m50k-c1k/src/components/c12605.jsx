import React from 'react';
const LABEL_12605 = 'component_12605';
export function Component12605({ value = 12605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12605, 'data-value': derived.doubled }, children);
}
export default Component12605;
