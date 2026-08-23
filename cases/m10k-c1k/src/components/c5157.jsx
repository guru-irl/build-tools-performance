import React from 'react';
const LABEL_5157 = 'component_5157';
export function Component5157({ value = 5157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5157, 'data-value': derived.doubled }, children);
}
export default Component5157;
