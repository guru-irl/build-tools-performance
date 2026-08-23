import React from 'react';
const LABEL_9292 = 'component_9292';
export function Component9292({ value = 9292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9292, 'data-value': derived.doubled }, children);
}
export default Component9292;
