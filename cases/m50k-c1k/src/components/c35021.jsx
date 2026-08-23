import React from 'react';
const LABEL_35021 = 'component_35021';
export function Component35021({ value = 35021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35021, 'data-value': derived.doubled }, children);
}
export default Component35021;
