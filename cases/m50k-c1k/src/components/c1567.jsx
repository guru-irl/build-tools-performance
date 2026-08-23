import React from 'react';
const LABEL_1567 = 'component_1567';
export function Component1567({ value = 1567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1567, 'data-value': derived.doubled }, children);
}
export default Component1567;
