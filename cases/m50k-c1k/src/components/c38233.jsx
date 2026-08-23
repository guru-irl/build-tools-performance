import React from 'react';
const LABEL_38233 = 'component_38233';
export function Component38233({ value = 38233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38233, 'data-value': derived.doubled }, children);
}
export default Component38233;
