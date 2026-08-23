import React from 'react';
const LABEL_6757 = 'component_6757';
export function Component6757({ value = 6757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6757, 'data-value': derived.doubled }, children);
}
export default Component6757;
