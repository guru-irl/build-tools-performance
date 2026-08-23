import React from 'react';
const LABEL_20021 = 'component_20021';
export function Component20021({ value = 20021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20021, 'data-value': derived.doubled }, children);
}
export default Component20021;
