import React from 'react';
const LABEL_9043 = 'component_9043';
export function Component9043({ value = 9043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9043, 'data-value': derived.doubled }, children);
}
export default Component9043;
