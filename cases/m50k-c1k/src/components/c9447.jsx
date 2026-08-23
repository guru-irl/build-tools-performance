import React from 'react';
const LABEL_9447 = 'component_9447';
export function Component9447({ value = 9447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9447, 'data-value': derived.doubled }, children);
}
export default Component9447;
