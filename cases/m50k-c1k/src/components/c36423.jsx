import React from 'react';
const LABEL_36423 = 'component_36423';
export function Component36423({ value = 36423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36423, 'data-value': derived.doubled }, children);
}
export default Component36423;
