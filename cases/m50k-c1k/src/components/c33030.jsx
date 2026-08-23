import React from 'react';
const LABEL_33030 = 'component_33030';
export function Component33030({ value = 33030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33030, 'data-value': derived.doubled }, children);
}
export default Component33030;
