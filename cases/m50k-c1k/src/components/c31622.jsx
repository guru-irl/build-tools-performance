import React from 'react';
const LABEL_31622 = 'component_31622';
export function Component31622({ value = 31622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31622, 'data-value': derived.doubled }, children);
}
export default Component31622;
