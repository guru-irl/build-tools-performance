import React from 'react';
const LABEL_33873 = 'component_33873';
export function Component33873({ value = 33873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33873, 'data-value': derived.doubled }, children);
}
export default Component33873;
