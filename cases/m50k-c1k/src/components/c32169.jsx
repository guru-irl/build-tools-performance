import React from 'react';
const LABEL_32169 = 'component_32169';
export function Component32169({ value = 32169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32169, 'data-value': derived.doubled }, children);
}
export default Component32169;
