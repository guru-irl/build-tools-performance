import React from 'react';
const LABEL_8021 = 'component_8021';
export function Component8021({ value = 8021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8021, 'data-value': derived.doubled }, children);
}
export default Component8021;
