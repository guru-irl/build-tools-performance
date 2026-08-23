import React from 'react';
const LABEL_23864 = 'component_23864';
export function Component23864({ value = 23864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23864, 'data-value': derived.doubled }, children);
}
export default Component23864;
