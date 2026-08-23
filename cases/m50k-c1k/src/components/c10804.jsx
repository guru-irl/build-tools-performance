import React from 'react';
const LABEL_10804 = 'component_10804';
export function Component10804({ value = 10804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10804, 'data-value': derived.doubled }, children);
}
export default Component10804;
