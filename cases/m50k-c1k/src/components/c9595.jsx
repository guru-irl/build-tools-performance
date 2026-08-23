import React from 'react';
const LABEL_9595 = 'component_9595';
export function Component9595({ value = 9595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9595, 'data-value': derived.doubled }, children);
}
export default Component9595;
