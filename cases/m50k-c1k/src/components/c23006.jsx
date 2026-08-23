import React from 'react';
const LABEL_23006 = 'component_23006';
export function Component23006({ value = 23006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23006, 'data-value': derived.doubled }, children);
}
export default Component23006;
