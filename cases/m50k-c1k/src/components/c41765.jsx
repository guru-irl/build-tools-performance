import React from 'react';
const LABEL_41765 = 'component_41765';
export function Component41765({ value = 41765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41765, 'data-value': derived.doubled }, children);
}
export default Component41765;
