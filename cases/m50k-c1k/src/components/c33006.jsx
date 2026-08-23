import React from 'react';
const LABEL_33006 = 'component_33006';
export function Component33006({ value = 33006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33006, 'data-value': derived.doubled }, children);
}
export default Component33006;
