import React from 'react';
const LABEL_20765 = 'component_20765';
export function Component20765({ value = 20765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20765, 'data-value': derived.doubled }, children);
}
export default Component20765;
