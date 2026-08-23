import React from 'react';
const LABEL_46372 = 'component_46372';
export function Component46372({ value = 46372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46372, 'data-value': derived.doubled }, children);
}
export default Component46372;
