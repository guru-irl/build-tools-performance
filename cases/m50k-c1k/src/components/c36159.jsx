import React from 'react';
const LABEL_36159 = 'component_36159';
export function Component36159({ value = 36159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36159, 'data-value': derived.doubled }, children);
}
export default Component36159;
