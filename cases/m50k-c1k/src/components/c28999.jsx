import React from 'react';
const LABEL_28999 = 'component_28999';
export function Component28999({ value = 28999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28999, 'data-value': derived.doubled }, children);
}
export default Component28999;
