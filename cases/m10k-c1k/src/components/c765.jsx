import React from 'react';
const LABEL_765 = 'component_765';
export function Component765({ value = 765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_765, 'data-value': derived.doubled }, children);
}
export default Component765;
