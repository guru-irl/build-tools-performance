import React from 'react';
const LABEL_4642 = 'component_4642';
export function Component4642({ value = 4642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4642, 'data-value': derived.doubled }, children);
}
export default Component4642;
