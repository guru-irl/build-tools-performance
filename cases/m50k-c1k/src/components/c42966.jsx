import React from 'react';
const LABEL_42966 = 'component_42966';
export function Component42966({ value = 42966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42966, 'data-value': derived.doubled }, children);
}
export default Component42966;
