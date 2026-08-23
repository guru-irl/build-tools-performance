import React from 'react';
const LABEL_8006 = 'component_8006';
export function Component8006({ value = 8006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8006, 'data-value': derived.doubled }, children);
}
export default Component8006;
