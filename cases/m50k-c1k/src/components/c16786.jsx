import React from 'react';
const LABEL_16786 = 'component_16786';
export function Component16786({ value = 16786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16786, 'data-value': derived.doubled }, children);
}
export default Component16786;
