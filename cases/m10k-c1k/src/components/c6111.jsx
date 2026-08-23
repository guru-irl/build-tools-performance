import React from 'react';
const LABEL_6111 = 'component_6111';
export function Component6111({ value = 6111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6111, 'data-value': derived.doubled }, children);
}
export default Component6111;
