import React from 'react';
const LABEL_5622 = 'component_5622';
export function Component5622({ value = 5622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5622, 'data-value': derived.doubled }, children);
}
export default Component5622;
