import React from 'react';
const LABEL_11006 = 'component_11006';
export function Component11006({ value = 11006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11006, 'data-value': derived.doubled }, children);
}
export default Component11006;
