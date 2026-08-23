import React from 'react';
const LABEL_7765 = 'component_7765';
export function Component7765({ value = 7765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7765, 'data-value': derived.doubled }, children);
}
export default Component7765;
