import React from 'react';
const LABEL_26622 = 'component_26622';
export function Component26622({ value = 26622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26622, 'data-value': derived.doubled }, children);
}
export default Component26622;
