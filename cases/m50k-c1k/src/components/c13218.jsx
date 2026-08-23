import React from 'react';
const LABEL_13218 = 'component_13218';
export function Component13218({ value = 13218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13218, 'data-value': derived.doubled }, children);
}
export default Component13218;
