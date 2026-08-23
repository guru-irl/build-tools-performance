import React from 'react';
const LABEL_13012 = 'component_13012';
export function Component13012({ value = 13012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13012, 'data-value': derived.doubled }, children);
}
export default Component13012;
