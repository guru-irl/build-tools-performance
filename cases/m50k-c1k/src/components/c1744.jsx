import React from 'react';
const LABEL_1744 = 'component_1744';
export function Component1744({ value = 1744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1744, 'data-value': derived.doubled }, children);
}
export default Component1744;
