import React from 'react';
const LABEL_7642 = 'component_7642';
export function Component7642({ value = 7642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7642, 'data-value': derived.doubled }, children);
}
export default Component7642;
