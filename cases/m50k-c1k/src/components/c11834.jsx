import React from 'react';
const LABEL_11834 = 'component_11834';
export function Component11834({ value = 11834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11834, 'data-value': derived.doubled }, children);
}
export default Component11834;
