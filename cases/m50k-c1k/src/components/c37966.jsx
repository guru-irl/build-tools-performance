import React from 'react';
const LABEL_37966 = 'component_37966';
export function Component37966({ value = 37966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37966, 'data-value': derived.doubled }, children);
}
export default Component37966;
