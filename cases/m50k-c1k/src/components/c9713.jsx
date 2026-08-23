import React from 'react';
const LABEL_9713 = 'component_9713';
export function Component9713({ value = 9713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9713, 'data-value': derived.doubled }, children);
}
export default Component9713;
