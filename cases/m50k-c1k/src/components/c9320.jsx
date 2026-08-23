import React from 'react';
const LABEL_9320 = 'component_9320';
export function Component9320({ value = 9320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9320, 'data-value': derived.doubled }, children);
}
export default Component9320;
