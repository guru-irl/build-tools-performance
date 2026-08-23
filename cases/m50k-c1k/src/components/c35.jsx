import React from 'react';
const LABEL_35 = 'component_35';
export function Component35({ value = 35, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35, 'data-value': derived.doubled }, children);
}
export default Component35;
