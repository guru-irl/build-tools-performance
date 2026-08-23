import React from 'react';
const LABEL_24642 = 'component_24642';
export function Component24642({ value = 24642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24642, 'data-value': derived.doubled }, children);
}
export default Component24642;
