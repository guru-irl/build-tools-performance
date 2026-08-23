import React from 'react';
const LABEL_9021 = 'component_9021';
export function Component9021({ value = 9021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9021, 'data-value': derived.doubled }, children);
}
export default Component9021;
