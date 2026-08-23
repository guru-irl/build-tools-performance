import React from 'react';
const LABEL_11124 = 'component_11124';
export function Component11124({ value = 11124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11124, 'data-value': derived.doubled }, children);
}
export default Component11124;
