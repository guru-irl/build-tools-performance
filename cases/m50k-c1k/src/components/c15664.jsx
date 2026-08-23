import React from 'react';
const LABEL_15664 = 'component_15664';
export function Component15664({ value = 15664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15664, 'data-value': derived.doubled }, children);
}
export default Component15664;
