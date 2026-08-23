import React from 'react';
const LABEL_44021 = 'component_44021';
export function Component44021({ value = 44021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44021, 'data-value': derived.doubled }, children);
}
export default Component44021;
