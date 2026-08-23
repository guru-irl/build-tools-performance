import React from 'react';
const LABEL_1158 = 'component_1158';
export function Component1158({ value = 1158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1158, 'data-value': derived.doubled }, children);
}
export default Component1158;
