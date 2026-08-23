import React from 'react';
const LABEL_26666 = 'component_26666';
export function Component26666({ value = 26666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26666, 'data-value': derived.doubled }, children);
}
export default Component26666;
