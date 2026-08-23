import React from 'react';
const LABEL_10664 = 'component_10664';
export function Component10664({ value = 10664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10664, 'data-value': derived.doubled }, children);
}
export default Component10664;
