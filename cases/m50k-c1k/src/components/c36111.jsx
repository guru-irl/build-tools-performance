import React from 'react';
const LABEL_36111 = 'component_36111';
export function Component36111({ value = 36111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36111, 'data-value': derived.doubled }, children);
}
export default Component36111;
