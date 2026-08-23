import React from 'react';
const LABEL_9068 = 'component_9068';
export function Component9068({ value = 9068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9068, 'data-value': derived.doubled }, children);
}
export default Component9068;
