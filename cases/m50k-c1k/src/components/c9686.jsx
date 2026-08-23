import React from 'react';
const LABEL_9686 = 'component_9686';
export function Component9686({ value = 9686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9686, 'data-value': derived.doubled }, children);
}
export default Component9686;
