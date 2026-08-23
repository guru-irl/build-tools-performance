import React from 'react';
const LABEL_9275 = 'component_9275';
export function Component9275({ value = 9275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9275, 'data-value': derived.doubled }, children);
}
export default Component9275;
