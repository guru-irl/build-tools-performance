import React from 'react';
const LABEL_42111 = 'component_42111';
export function Component42111({ value = 42111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42111, 'data-value': derived.doubled }, children);
}
export default Component42111;
