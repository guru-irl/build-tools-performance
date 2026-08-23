import React from 'react';
const LABEL_864 = 'component_864';
export function Component864({ value = 864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_864, 'data-value': derived.doubled }, children);
}
export default Component864;
