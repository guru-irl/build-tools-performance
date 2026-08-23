import React from 'react';
const LABEL_36455 = 'component_36455';
export function Component36455({ value = 36455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36455, 'data-value': derived.doubled }, children);
}
export default Component36455;
