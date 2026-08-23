import React from 'react';
const LABEL_46765 = 'component_46765';
export function Component46765({ value = 46765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46765, 'data-value': derived.doubled }, children);
}
export default Component46765;
