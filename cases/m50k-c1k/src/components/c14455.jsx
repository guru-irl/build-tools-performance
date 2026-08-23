import React from 'react';
const LABEL_14455 = 'component_14455';
export function Component14455({ value = 14455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14455, 'data-value': derived.doubled }, children);
}
export default Component14455;
