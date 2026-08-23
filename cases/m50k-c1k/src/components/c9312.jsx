import React from 'react';
const LABEL_9312 = 'component_9312';
export function Component9312({ value = 9312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9312, 'data-value': derived.doubled }, children);
}
export default Component9312;
