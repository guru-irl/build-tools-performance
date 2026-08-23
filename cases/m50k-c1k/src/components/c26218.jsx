import React from 'react';
const LABEL_26218 = 'component_26218';
export function Component26218({ value = 26218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26218, 'data-value': derived.doubled }, children);
}
export default Component26218;
