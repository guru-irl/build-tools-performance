import React from 'react';
const LABEL_1070 = 'component_1070';
export function Component1070({ value = 1070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1070, 'data-value': derived.doubled }, children);
}
export default Component1070;
