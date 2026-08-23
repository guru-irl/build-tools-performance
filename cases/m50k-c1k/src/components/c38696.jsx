import React from 'react';
const LABEL_38696 = 'component_38696';
export function Component38696({ value = 38696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38696, 'data-value': derived.doubled }, children);
}
export default Component38696;
