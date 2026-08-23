import React from 'react';
const LABEL_28151 = 'component_28151';
export function Component28151({ value = 28151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28151, 'data-value': derived.doubled }, children);
}
export default Component28151;
