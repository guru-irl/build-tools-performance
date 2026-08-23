import React from 'react';
const LABEL_32769 = 'component_32769';
export function Component32769({ value = 32769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32769, 'data-value': derived.doubled }, children);
}
export default Component32769;
