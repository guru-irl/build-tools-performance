import React from 'react';
const LABEL_23834 = 'component_23834';
export function Component23834({ value = 23834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23834, 'data-value': derived.doubled }, children);
}
export default Component23834;
