import React from 'react';
const LABEL_36021 = 'component_36021';
export function Component36021({ value = 36021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36021, 'data-value': derived.doubled }, children);
}
export default Component36021;
