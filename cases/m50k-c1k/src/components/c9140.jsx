import React from 'react';
const LABEL_9140 = 'component_9140';
export function Component9140({ value = 9140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9140, 'data-value': derived.doubled }, children);
}
export default Component9140;
