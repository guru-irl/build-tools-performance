import React from 'react';
const LABEL_1081 = 'component_1081';
export function Component1081({ value = 1081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1081, 'data-value': derived.doubled }, children);
}
export default Component1081;
