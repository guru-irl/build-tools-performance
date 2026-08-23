import React from 'react';
const LABEL_9386 = 'component_9386';
export function Component9386({ value = 9386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9386, 'data-value': derived.doubled }, children);
}
export default Component9386;
