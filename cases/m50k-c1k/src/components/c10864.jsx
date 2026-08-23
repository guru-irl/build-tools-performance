import React from 'react';
const LABEL_10864 = 'component_10864';
export function Component10864({ value = 10864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10864, 'data-value': derived.doubled }, children);
}
export default Component10864;
