import React from 'react';
const LABEL_26621 = 'component_26621';
export function Component26621({ value = 26621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26621, 'data-value': derived.doubled }, children);
}
export default Component26621;
