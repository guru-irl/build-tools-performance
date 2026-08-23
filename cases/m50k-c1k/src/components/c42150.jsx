import React from 'react';
const LABEL_42150 = 'component_42150';
export function Component42150({ value = 42150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42150, 'data-value': derived.doubled }, children);
}
export default Component42150;
