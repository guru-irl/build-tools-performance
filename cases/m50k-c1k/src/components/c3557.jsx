import React from 'react';
const LABEL_3557 = 'component_3557';
export function Component3557({ value = 3557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3557, 'data-value': derived.doubled }, children);
}
export default Component3557;
