import React from 'react';
const LABEL_9553 = 'component_9553';
export function Component9553({ value = 9553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9553, 'data-value': derived.doubled }, children);
}
export default Component9553;
