import React from 'react';
const LABEL_11 = 'component_11';
export function Component11({ value = 11, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11, 'data-value': derived.doubled }, children);
}
export default Component11;
