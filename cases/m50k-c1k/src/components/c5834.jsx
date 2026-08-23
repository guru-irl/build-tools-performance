import React from 'react';
const LABEL_5834 = 'component_5834';
export function Component5834({ value = 5834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5834, 'data-value': derived.doubled }, children);
}
export default Component5834;
