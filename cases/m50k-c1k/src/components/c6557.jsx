import React from 'react';
const LABEL_6557 = 'component_6557';
export function Component6557({ value = 6557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6557, 'data-value': derived.doubled }, children);
}
export default Component6557;
