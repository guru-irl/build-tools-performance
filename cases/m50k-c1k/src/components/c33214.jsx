import React from 'react';
const LABEL_33214 = 'component_33214';
export function Component33214({ value = 33214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33214, 'data-value': derived.doubled }, children);
}
export default Component33214;
