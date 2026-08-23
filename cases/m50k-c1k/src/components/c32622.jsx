import React from 'react';
const LABEL_32622 = 'component_32622';
export function Component32622({ value = 32622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32622, 'data-value': derived.doubled }, children);
}
export default Component32622;
