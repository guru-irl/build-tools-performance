import React from 'react';
const LABEL_23021 = 'component_23021';
export function Component23021({ value = 23021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23021, 'data-value': derived.doubled }, children);
}
export default Component23021;
