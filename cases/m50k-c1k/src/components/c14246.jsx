import React from 'react';
const LABEL_14246 = 'component_14246';
export function Component14246({ value = 14246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14246, 'data-value': derived.doubled }, children);
}
export default Component14246;
