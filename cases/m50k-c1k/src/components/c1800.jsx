import React from 'react';
const LABEL_1800 = 'component_1800';
export function Component1800({ value = 1800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1800, 'data-value': derived.doubled }, children);
}
export default Component1800;
