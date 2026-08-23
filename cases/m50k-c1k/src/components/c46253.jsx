import React from 'react';
const LABEL_46253 = 'component_46253';
export function Component46253({ value = 46253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46253, 'data-value': derived.doubled }, children);
}
export default Component46253;
