import React from 'react';
const LABEL_18622 = 'component_18622';
export function Component18622({ value = 18622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18622, 'data-value': derived.doubled }, children);
}
export default Component18622;
