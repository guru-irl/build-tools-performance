import React from 'react';
const LABEL_46876 = 'component_46876';
export function Component46876({ value = 46876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46876, 'data-value': derived.doubled }, children);
}
export default Component46876;
