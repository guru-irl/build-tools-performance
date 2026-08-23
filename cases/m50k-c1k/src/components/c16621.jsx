import React from 'react';
const LABEL_16621 = 'component_16621';
export function Component16621({ value = 16621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16621, 'data-value': derived.doubled }, children);
}
export default Component16621;
