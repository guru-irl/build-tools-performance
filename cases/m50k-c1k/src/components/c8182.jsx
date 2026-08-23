import React from 'react';
const LABEL_8182 = 'component_8182';
export function Component8182({ value = 8182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8182, 'data-value': derived.doubled }, children);
}
export default Component8182;
