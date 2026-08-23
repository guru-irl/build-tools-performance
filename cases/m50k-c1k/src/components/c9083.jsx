import React from 'react';
const LABEL_9083 = 'component_9083';
export function Component9083({ value = 9083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9083, 'data-value': derived.doubled }, children);
}
export default Component9083;
