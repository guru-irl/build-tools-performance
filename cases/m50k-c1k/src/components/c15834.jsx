import React from 'react';
const LABEL_15834 = 'component_15834';
export function Component15834({ value = 15834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15834, 'data-value': derived.doubled }, children);
}
export default Component15834;
