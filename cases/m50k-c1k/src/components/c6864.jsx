import React from 'react';
const LABEL_6864 = 'component_6864';
export function Component6864({ value = 6864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6864, 'data-value': derived.doubled }, children);
}
export default Component6864;
