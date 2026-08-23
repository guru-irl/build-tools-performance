import React from 'react';
const LABEL_5218 = 'component_5218';
export function Component5218({ value = 5218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5218, 'data-value': derived.doubled }, children);
}
export default Component5218;
