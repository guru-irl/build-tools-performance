import React from 'react';
const LABEL_9299 = 'component_9299';
export function Component9299({ value = 9299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9299, 'data-value': derived.doubled }, children);
}
export default Component9299;
