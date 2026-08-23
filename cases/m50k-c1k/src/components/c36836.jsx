import React from 'react';
const LABEL_36836 = 'component_36836';
export function Component36836({ value = 36836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36836, 'data-value': derived.doubled }, children);
}
export default Component36836;
