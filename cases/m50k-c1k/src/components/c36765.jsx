import React from 'react';
const LABEL_36765 = 'component_36765';
export function Component36765({ value = 36765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36765, 'data-value': derived.doubled }, children);
}
export default Component36765;
