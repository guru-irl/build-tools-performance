import React from 'react';
const LABEL_5454 = 'component_5454';
export function Component5454({ value = 5454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5454, 'data-value': derived.doubled }, children);
}
export default Component5454;
