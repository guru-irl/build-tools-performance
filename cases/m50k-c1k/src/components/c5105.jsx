import React from 'react';
const LABEL_5105 = 'component_5105';
export function Component5105({ value = 5105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5105, 'data-value': derived.doubled }, children);
}
export default Component5105;
