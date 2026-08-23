import React from 'react';
const LABEL_29864 = 'component_29864';
export function Component29864({ value = 29864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29864, 'data-value': derived.doubled }, children);
}
export default Component29864;
