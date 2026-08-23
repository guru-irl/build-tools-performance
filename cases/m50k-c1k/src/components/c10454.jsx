import React from 'react';
const LABEL_10454 = 'component_10454';
export function Component10454({ value = 10454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10454, 'data-value': derived.doubled }, children);
}
export default Component10454;
