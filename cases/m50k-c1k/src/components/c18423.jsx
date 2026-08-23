import React from 'react';
const LABEL_18423 = 'component_18423';
export function Component18423({ value = 18423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18423, 'data-value': derived.doubled }, children);
}
export default Component18423;
