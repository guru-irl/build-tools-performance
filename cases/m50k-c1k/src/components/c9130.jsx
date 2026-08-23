import React from 'react';
const LABEL_9130 = 'component_9130';
export function Component9130({ value = 9130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9130, 'data-value': derived.doubled }, children);
}
export default Component9130;
