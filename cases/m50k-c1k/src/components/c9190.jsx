import React from 'react';
const LABEL_9190 = 'component_9190';
export function Component9190({ value = 9190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9190, 'data-value': derived.doubled }, children);
}
export default Component9190;
