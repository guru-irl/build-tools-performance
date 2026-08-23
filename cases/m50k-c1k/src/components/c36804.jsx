import React from 'react';
const LABEL_36804 = 'component_36804';
export function Component36804({ value = 36804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36804, 'data-value': derived.doubled }, children);
}
export default Component36804;
