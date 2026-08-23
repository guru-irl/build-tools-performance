import React from 'react';
const LABEL_13455 = 'component_13455';
export function Component13455({ value = 13455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13455, 'data-value': derived.doubled }, children);
}
export default Component13455;
