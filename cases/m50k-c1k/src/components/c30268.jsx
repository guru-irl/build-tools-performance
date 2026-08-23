import React from 'react';
const LABEL_30268 = 'component_30268';
export function Component30268({ value = 30268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30268, 'data-value': derived.doubled }, children);
}
export default Component30268;
