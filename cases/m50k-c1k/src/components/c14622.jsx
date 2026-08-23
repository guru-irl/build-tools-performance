import React from 'react';
const LABEL_14622 = 'component_14622';
export function Component14622({ value = 14622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14622, 'data-value': derived.doubled }, children);
}
export default Component14622;
