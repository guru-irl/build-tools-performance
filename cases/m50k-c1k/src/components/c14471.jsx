import React from 'react';
const LABEL_14471 = 'component_14471';
export function Component14471({ value = 14471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14471, 'data-value': derived.doubled }, children);
}
export default Component14471;
