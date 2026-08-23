import React from 'react';
const LABEL_16423 = 'component_16423';
export function Component16423({ value = 16423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16423, 'data-value': derived.doubled }, children);
}
export default Component16423;
