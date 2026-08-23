import React from 'react';
const LABEL_6754 = 'component_6754';
export function Component6754({ value = 6754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6754, 'data-value': derived.doubled }, children);
}
export default Component6754;
