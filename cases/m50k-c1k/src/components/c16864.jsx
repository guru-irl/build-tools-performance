import React from 'react';
const LABEL_16864 = 'component_16864';
export function Component16864({ value = 16864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16864, 'data-value': derived.doubled }, children);
}
export default Component16864;
