import React from 'react';
const LABEL_32640 = 'component_32640';
export function Component32640({ value = 32640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32640, 'data-value': derived.doubled }, children);
}
export default Component32640;
