import React from 'react';
const LABEL_30765 = 'component_30765';
export function Component30765({ value = 30765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30765, 'data-value': derived.doubled }, children);
}
export default Component30765;
