import React from 'react';
const LABEL_40628 = 'component_40628';
export function Component40628({ value = 40628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40628, 'data-value': derived.doubled }, children);
}
export default Component40628;
