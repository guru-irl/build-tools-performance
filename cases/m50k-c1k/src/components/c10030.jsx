import React from 'react';
const LABEL_10030 = 'component_10030';
export function Component10030({ value = 10030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10030, 'data-value': derived.doubled }, children);
}
export default Component10030;
