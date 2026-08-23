import React from 'react';
const LABEL_15864 = 'component_15864';
export function Component15864({ value = 15864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15864, 'data-value': derived.doubled }, children);
}
export default Component15864;
