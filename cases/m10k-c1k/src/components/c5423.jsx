import React from 'react';
const LABEL_5423 = 'component_5423';
export function Component5423({ value = 5423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5423, 'data-value': derived.doubled }, children);
}
export default Component5423;
