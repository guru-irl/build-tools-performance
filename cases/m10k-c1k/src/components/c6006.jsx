import React from 'react';
const LABEL_6006 = 'component_6006';
export function Component6006({ value = 6006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6006, 'data-value': derived.doubled }, children);
}
export default Component6006;
