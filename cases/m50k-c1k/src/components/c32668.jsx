import React from 'react';
const LABEL_32668 = 'component_32668';
export function Component32668({ value = 32668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32668, 'data-value': derived.doubled }, children);
}
export default Component32668;
