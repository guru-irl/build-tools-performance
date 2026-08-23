import React from 'react';
const LABEL_5182 = 'component_5182';
export function Component5182({ value = 5182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5182, 'data-value': derived.doubled }, children);
}
export default Component5182;
