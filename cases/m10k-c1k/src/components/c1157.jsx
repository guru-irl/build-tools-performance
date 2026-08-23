import React from 'react';
const LABEL_1157 = 'component_1157';
export function Component1157({ value = 1157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1157, 'data-value': derived.doubled }, children);
}
export default Component1157;
