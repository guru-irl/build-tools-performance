import React from 'react';
const LABEL_42642 = 'component_42642';
export function Component42642({ value = 42642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42642, 'data-value': derived.doubled }, children);
}
export default Component42642;
