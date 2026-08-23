import React from 'react';
const LABEL_46705 = 'component_46705';
export function Component46705({ value = 46705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46705, 'data-value': derived.doubled }, children);
}
export default Component46705;
