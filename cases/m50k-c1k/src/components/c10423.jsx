import React from 'react';
const LABEL_10423 = 'component_10423';
export function Component10423({ value = 10423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10423, 'data-value': derived.doubled }, children);
}
export default Component10423;
