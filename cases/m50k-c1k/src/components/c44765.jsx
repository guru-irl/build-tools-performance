import React from 'react';
const LABEL_44765 = 'component_44765';
export function Component44765({ value = 44765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44765, 'data-value': derived.doubled }, children);
}
export default Component44765;
