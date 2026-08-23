import React from 'react';
const LABEL_36864 = 'component_36864';
export function Component36864({ value = 36864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36864, 'data-value': derived.doubled }, children);
}
export default Component36864;
