import React from 'react';
const LABEL_36769 = 'component_36769';
export function Component36769({ value = 36769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36769, 'data-value': derived.doubled }, children);
}
export default Component36769;
