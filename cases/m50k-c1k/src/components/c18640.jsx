import React from 'react';
const LABEL_18640 = 'component_18640';
export function Component18640({ value = 18640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18640, 'data-value': derived.doubled }, children);
}
export default Component18640;
