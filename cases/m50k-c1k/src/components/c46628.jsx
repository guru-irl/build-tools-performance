import React from 'react';
const LABEL_46628 = 'component_46628';
export function Component46628({ value = 46628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46628, 'data-value': derived.doubled }, children);
}
export default Component46628;
