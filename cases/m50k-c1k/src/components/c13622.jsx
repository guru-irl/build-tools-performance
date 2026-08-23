import React from 'react';
const LABEL_13622 = 'component_13622';
export function Component13622({ value = 13622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13622, 'data-value': derived.doubled }, children);
}
export default Component13622;
