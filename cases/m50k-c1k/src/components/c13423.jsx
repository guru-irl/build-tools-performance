import React from 'react';
const LABEL_13423 = 'component_13423';
export function Component13423({ value = 13423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13423, 'data-value': derived.doubled }, children);
}
export default Component13423;
