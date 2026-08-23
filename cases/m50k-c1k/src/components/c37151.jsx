import React from 'react';
const LABEL_37151 = 'component_37151';
export function Component37151({ value = 37151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37151, 'data-value': derived.doubled }, children);
}
export default Component37151;
