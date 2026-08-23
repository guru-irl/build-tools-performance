import React from 'react';
const LABEL_15151 = 'component_15151';
export function Component15151({ value = 15151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15151, 'data-value': derived.doubled }, children);
}
export default Component15151;
