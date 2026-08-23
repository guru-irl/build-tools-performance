import React from 'react';
const LABEL_4765 = 'component_4765';
export function Component4765({ value = 4765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4765, 'data-value': derived.doubled }, children);
}
export default Component4765;
