import React from 'react';
const LABEL_25628 = 'component_25628';
export function Component25628({ value = 25628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25628, 'data-value': derived.doubled }, children);
}
export default Component25628;
