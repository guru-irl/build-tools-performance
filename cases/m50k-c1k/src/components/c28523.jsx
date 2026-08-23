import React from 'react';
const LABEL_28523 = 'component_28523';
export function Component28523({ value = 28523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28523, 'data-value': derived.doubled }, children);
}
export default Component28523;
