import React from 'react';
const LABEL_37765 = 'component_37765';
export function Component37765({ value = 37765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37765, 'data-value': derived.doubled }, children);
}
export default Component37765;
