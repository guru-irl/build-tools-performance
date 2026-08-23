import React from 'react';
const LABEL_35037 = 'component_35037';
export function Component35037({ value = 35037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35037, 'data-value': derived.doubled }, children);
}
export default Component35037;
