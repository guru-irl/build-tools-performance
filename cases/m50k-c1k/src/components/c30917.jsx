import React from 'react';
const LABEL_30917 = 'component_30917';
export function Component30917({ value = 30917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30917, 'data-value': derived.doubled }, children);
}
export default Component30917;
