import React from 'react';
const LABEL_9752 = 'component_9752';
export function Component9752({ value = 9752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9752, 'data-value': derived.doubled }, children);
}
export default Component9752;
