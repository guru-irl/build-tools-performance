import React from 'react';
const LABEL_16218 = 'component_16218';
export function Component16218({ value = 16218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16218, 'data-value': derived.doubled }, children);
}
export default Component16218;
