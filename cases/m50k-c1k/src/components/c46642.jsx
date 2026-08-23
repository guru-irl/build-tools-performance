import React from 'react';
const LABEL_46642 = 'component_46642';
export function Component46642({ value = 46642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46642, 'data-value': derived.doubled }, children);
}
export default Component46642;
