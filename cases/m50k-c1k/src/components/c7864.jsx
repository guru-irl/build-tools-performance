import React from 'react';
const LABEL_7864 = 'component_7864';
export function Component7864({ value = 7864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7864, 'data-value': derived.doubled }, children);
}
export default Component7864;
