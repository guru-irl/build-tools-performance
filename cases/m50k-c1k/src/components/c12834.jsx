import React from 'react';
const LABEL_12834 = 'component_12834';
export function Component12834({ value = 12834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12834, 'data-value': derived.doubled }, children);
}
export default Component12834;
