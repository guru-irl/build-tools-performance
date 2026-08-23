import React from 'react';
const LABEL_32832 = 'component_32832';
export function Component32832({ value = 32832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32832, 'data-value': derived.doubled }, children);
}
export default Component32832;
