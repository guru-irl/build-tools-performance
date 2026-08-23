import React from 'react';
const LABEL_20969 = 'component_20969';
export function Component20969({ value = 20969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20969, 'data-value': derived.doubled }, children);
}
export default Component20969;
