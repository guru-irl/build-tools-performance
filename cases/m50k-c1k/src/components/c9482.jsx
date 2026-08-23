import React from 'react';
const LABEL_9482 = 'component_9482';
export function Component9482({ value = 9482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9482, 'data-value': derived.doubled }, children);
}
export default Component9482;
