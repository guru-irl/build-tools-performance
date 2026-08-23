import React from 'react';
const LABEL_9165 = 'component_9165';
export function Component9165({ value = 9165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9165, 'data-value': derived.doubled }, children);
}
export default Component9165;
