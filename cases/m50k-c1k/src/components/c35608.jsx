import React from 'react';
const LABEL_35608 = 'component_35608';
export function Component35608({ value = 35608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35608, 'data-value': derived.doubled }, children);
}
export default Component35608;
