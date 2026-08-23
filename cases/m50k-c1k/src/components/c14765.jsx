import React from 'react';
const LABEL_14765 = 'component_14765';
export function Component14765({ value = 14765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14765, 'data-value': derived.doubled }, children);
}
export default Component14765;
