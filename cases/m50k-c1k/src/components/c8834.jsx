import React from 'react';
const LABEL_8834 = 'component_8834';
export function Component8834({ value = 8834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8834, 'data-value': derived.doubled }, children);
}
export default Component8834;
