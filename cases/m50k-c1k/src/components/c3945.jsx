import React from 'react';
const LABEL_3945 = 'component_3945';
export function Component3945({ value = 3945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3945, 'data-value': derived.doubled }, children);
}
export default Component3945;
