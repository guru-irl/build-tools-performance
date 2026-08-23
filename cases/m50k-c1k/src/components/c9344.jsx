import React from 'react';
const LABEL_9344 = 'component_9344';
export function Component9344({ value = 9344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9344, 'data-value': derived.doubled }, children);
}
export default Component9344;
