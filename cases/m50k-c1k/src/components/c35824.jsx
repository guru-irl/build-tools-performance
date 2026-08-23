import React from 'react';
const LABEL_35824 = 'component_35824';
export function Component35824({ value = 35824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35824, 'data-value': derived.doubled }, children);
}
export default Component35824;
