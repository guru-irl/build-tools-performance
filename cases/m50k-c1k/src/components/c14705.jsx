import React from 'react';
const LABEL_14705 = 'component_14705';
export function Component14705({ value = 14705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14705, 'data-value': derived.doubled }, children);
}
export default Component14705;
