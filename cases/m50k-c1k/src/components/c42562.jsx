import React from 'react';
const LABEL_42562 = 'component_42562';
export function Component42562({ value = 42562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42562, 'data-value': derived.doubled }, children);
}
export default Component42562;
