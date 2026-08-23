import React from 'react';
const LABEL_9028 = 'component_9028';
export function Component9028({ value = 9028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9028, 'data-value': derived.doubled }, children);
}
export default Component9028;
