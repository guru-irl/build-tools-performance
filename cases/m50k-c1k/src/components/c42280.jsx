import React from 'react';
const LABEL_42280 = 'component_42280';
export function Component42280({ value = 42280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42280, 'data-value': derived.doubled }, children);
}
export default Component42280;
