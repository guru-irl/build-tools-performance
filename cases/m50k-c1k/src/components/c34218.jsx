import React from 'react';
const LABEL_34218 = 'component_34218';
export function Component34218({ value = 34218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34218, 'data-value': derived.doubled }, children);
}
export default Component34218;
