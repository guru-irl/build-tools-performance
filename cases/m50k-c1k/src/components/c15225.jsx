import React from 'react';
const LABEL_15225 = 'component_15225';
export function Component15225({ value = 15225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15225, 'data-value': derived.doubled }, children);
}
export default Component15225;
