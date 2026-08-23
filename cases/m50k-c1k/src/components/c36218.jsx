import React from 'react';
const LABEL_36218 = 'component_36218';
export function Component36218({ value = 36218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36218, 'data-value': derived.doubled }, children);
}
export default Component36218;
