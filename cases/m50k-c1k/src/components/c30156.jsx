import React from 'react';
const LABEL_30156 = 'component_30156';
export function Component30156({ value = 30156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30156, 'data-value': derived.doubled }, children);
}
export default Component30156;
