import React from 'react';
const LABEL_11109 = 'component_11109';
export function Component11109({ value = 11109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11109, 'data-value': derived.doubled }, children);
}
export default Component11109;
