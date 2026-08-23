import React from 'react';
const LABEL_38218 = 'component_38218';
export function Component38218({ value = 38218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38218, 'data-value': derived.doubled }, children);
}
export default Component38218;
