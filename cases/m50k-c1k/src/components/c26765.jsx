import React from 'react';
const LABEL_26765 = 'component_26765';
export function Component26765({ value = 26765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26765, 'data-value': derived.doubled }, children);
}
export default Component26765;
