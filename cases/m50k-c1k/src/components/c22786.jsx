import React from 'react';
const LABEL_22786 = 'component_22786';
export function Component22786({ value = 22786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22786, 'data-value': derived.doubled }, children);
}
export default Component22786;
