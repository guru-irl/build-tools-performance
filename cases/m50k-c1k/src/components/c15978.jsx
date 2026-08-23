import React from 'react';
const LABEL_15978 = 'component_15978';
export function Component15978({ value = 15978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15978, 'data-value': derived.doubled }, children);
}
export default Component15978;
