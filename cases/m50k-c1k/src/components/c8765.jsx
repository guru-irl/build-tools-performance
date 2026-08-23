import React from 'react';
const LABEL_8765 = 'component_8765';
export function Component8765({ value = 8765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8765, 'data-value': derived.doubled }, children);
}
export default Component8765;
