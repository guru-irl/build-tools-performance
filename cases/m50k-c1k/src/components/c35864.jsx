import React from 'react';
const LABEL_35864 = 'component_35864';
export function Component35864({ value = 35864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35864, 'data-value': derived.doubled }, children);
}
export default Component35864;
