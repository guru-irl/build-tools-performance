import React from 'react';
const LABEL_1769 = 'component_1769';
export function Component1769({ value = 1769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1769, 'data-value': derived.doubled }, children);
}
export default Component1769;
