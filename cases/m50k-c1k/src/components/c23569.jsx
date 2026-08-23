import React from 'react';
const LABEL_23569 = 'component_23569';
export function Component23569({ value = 23569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23569, 'data-value': derived.doubled }, children);
}
export default Component23569;
