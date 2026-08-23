import React from 'react';
const LABEL_36443 = 'component_36443';
export function Component36443({ value = 36443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36443, 'data-value': derived.doubled }, children);
}
export default Component36443;
