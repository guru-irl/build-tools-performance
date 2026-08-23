import React from 'react';
const LABEL_14256 = 'component_14256';
export function Component14256({ value = 14256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14256, 'data-value': derived.doubled }, children);
}
export default Component14256;
