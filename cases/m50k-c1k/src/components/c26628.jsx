import React from 'react';
const LABEL_26628 = 'component_26628';
export function Component26628({ value = 26628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26628, 'data-value': derived.doubled }, children);
}
export default Component26628;
