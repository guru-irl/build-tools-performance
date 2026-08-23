import React from 'react';
const LABEL_11123 = 'component_11123';
export function Component11123({ value = 11123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11123, 'data-value': derived.doubled }, children);
}
export default Component11123;
