import React from 'react';
const LABEL_23664 = 'component_23664';
export function Component23664({ value = 23664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23664, 'data-value': derived.doubled }, children);
}
export default Component23664;
