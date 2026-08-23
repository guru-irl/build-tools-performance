import React from 'react';
const LABEL_42218 = 'component_42218';
export function Component42218({ value = 42218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42218, 'data-value': derived.doubled }, children);
}
export default Component42218;
