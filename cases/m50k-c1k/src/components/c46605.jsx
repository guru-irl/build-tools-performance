import React from 'react';
const LABEL_46605 = 'component_46605';
export function Component46605({ value = 46605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46605, 'data-value': derived.doubled }, children);
}
export default Component46605;
