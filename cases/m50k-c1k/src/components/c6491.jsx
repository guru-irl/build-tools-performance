import React from 'react';
const LABEL_6491 = 'component_6491';
export function Component6491({ value = 6491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6491, 'data-value': derived.doubled }, children);
}
export default Component6491;
