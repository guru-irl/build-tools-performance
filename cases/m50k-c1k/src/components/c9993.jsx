import React from 'react';
const LABEL_9993 = 'component_9993';
export function Component9993({ value = 9993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9993, 'data-value': derived.doubled }, children);
}
export default Component9993;
