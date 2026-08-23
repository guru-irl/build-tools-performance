import React from 'react';
const LABEL_1253 = 'component_1253';
export function Component1253({ value = 1253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1253, 'data-value': derived.doubled }, children);
}
export default Component1253;
