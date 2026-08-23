import React from 'react';
const LABEL_9706 = 'component_9706';
export function Component9706({ value = 9706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9706, 'data-value': derived.doubled }, children);
}
export default Component9706;
