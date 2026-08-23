import React from 'react';
const LABEL_11765 = 'component_11765';
export function Component11765({ value = 11765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11765, 'data-value': derived.doubled }, children);
}
export default Component11765;
