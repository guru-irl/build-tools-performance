import React from 'react';
const LABEL_22966 = 'component_22966';
export function Component22966({ value = 22966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22966, 'data-value': derived.doubled }, children);
}
export default Component22966;
