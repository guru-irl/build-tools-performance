import React from 'react';
const LABEL_9668 = 'component_9668';
export function Component9668({ value = 9668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9668, 'data-value': derived.doubled }, children);
}
export default Component9668;
