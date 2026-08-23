import React from 'react';
const LABEL_46491 = 'component_46491';
export function Component46491({ value = 46491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46491, 'data-value': derived.doubled }, children);
}
export default Component46491;
