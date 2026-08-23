import React from 'react';
const LABEL_2834 = 'component_2834';
export function Component2834({ value = 2834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2834, 'data-value': derived.doubled }, children);
}
export default Component2834;
