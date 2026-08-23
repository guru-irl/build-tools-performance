import React from 'react';
const LABEL_5765 = 'component_5765';
export function Component5765({ value = 5765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5765, 'data-value': derived.doubled }, children);
}
export default Component5765;
