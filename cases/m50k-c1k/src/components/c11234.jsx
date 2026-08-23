import React from 'react';
const LABEL_11234 = 'component_11234';
export function Component11234({ value = 11234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11234, 'data-value': derived.doubled }, children);
}
export default Component11234;
