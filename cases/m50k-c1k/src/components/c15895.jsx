import React from 'react';
const LABEL_15895 = 'component_15895';
export function Component15895({ value = 15895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15895, 'data-value': derived.doubled }, children);
}
export default Component15895;
