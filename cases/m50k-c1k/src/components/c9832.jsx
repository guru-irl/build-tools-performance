import React from 'react';
const LABEL_9832 = 'component_9832';
export function Component9832({ value = 9832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9832, 'data-value': derived.doubled }, children);
}
export default Component9832;
