import React from 'react';
const LABEL_15423 = 'component_15423';
export function Component15423({ value = 15423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15423, 'data-value': derived.doubled }, children);
}
export default Component15423;
