import React from 'react';
const LABEL_3021 = 'component_3021';
export function Component3021({ value = 3021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3021, 'data-value': derived.doubled }, children);
}
export default Component3021;
