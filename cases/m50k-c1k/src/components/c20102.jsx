import React from 'react';
const LABEL_20102 = 'component_20102';
export function Component20102({ value = 20102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20102, 'data-value': derived.doubled }, children);
}
export default Component20102;
