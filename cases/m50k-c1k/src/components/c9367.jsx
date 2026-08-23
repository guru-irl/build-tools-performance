import React from 'react';
const LABEL_9367 = 'component_9367';
export function Component9367({ value = 9367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9367, 'data-value': derived.doubled }, children);
}
export default Component9367;
