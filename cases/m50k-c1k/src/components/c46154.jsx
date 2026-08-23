import React from 'react';
const LABEL_46154 = 'component_46154';
export function Component46154({ value = 46154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46154, 'data-value': derived.doubled }, children);
}
export default Component46154;
