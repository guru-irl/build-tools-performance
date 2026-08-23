import React from 'react';
const LABEL_30966 = 'component_30966';
export function Component30966({ value = 30966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30966, 'data-value': derived.doubled }, children);
}
export default Component30966;
