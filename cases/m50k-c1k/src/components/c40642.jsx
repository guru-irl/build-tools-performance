import React from 'react';
const LABEL_40642 = 'component_40642';
export function Component40642({ value = 40642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40642, 'data-value': derived.doubled }, children);
}
export default Component40642;
