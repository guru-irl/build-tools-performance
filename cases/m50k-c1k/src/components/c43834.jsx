import React from 'react';
const LABEL_43834 = 'component_43834';
export function Component43834({ value = 43834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43834, 'data-value': derived.doubled }, children);
}
export default Component43834;
