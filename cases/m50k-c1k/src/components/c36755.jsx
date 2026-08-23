import React from 'react';
const LABEL_36755 = 'component_36755';
export function Component36755({ value = 36755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36755, 'data-value': derived.doubled }, children);
}
export default Component36755;
