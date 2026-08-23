import React from 'react';
const LABEL_1864 = 'component_1864';
export function Component1864({ value = 1864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1864, 'data-value': derived.doubled }, children);
}
export default Component1864;
