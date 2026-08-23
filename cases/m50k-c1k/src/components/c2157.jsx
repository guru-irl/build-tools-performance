import React from 'react';
const LABEL_2157 = 'component_2157';
export function Component2157({ value = 2157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2157, 'data-value': derived.doubled }, children);
}
export default Component2157;
