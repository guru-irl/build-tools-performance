import React from 'react';
const LABEL_6481 = 'component_6481';
export function Component6481({ value = 6481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6481, 'data-value': derived.doubled }, children);
}
export default Component6481;
