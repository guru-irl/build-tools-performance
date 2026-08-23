import React from 'react';
const LABEL_9189 = 'component_9189';
export function Component9189({ value = 9189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9189, 'data-value': derived.doubled }, children);
}
export default Component9189;
