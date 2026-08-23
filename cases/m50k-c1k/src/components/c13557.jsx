import React from 'react';
const LABEL_13557 = 'component_13557';
export function Component13557({ value = 13557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13557, 'data-value': derived.doubled }, children);
}
export default Component13557;
