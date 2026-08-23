import React from 'react';
const LABEL_9659 = 'component_9659';
export function Component9659({ value = 9659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9659, 'data-value': derived.doubled }, children);
}
export default Component9659;
