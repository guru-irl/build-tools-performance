import React from 'react';
const LABEL_44966 = 'component_44966';
export function Component44966({ value = 44966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44966, 'data-value': derived.doubled }, children);
}
export default Component44966;
