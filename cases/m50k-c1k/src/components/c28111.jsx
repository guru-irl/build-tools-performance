import React from 'react';
const LABEL_28111 = 'component_28111';
export function Component28111({ value = 28111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28111, 'data-value': derived.doubled }, children);
}
export default Component28111;
