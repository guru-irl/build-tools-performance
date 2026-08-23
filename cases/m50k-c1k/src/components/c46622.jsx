import React from 'react';
const LABEL_46622 = 'component_46622';
export function Component46622({ value = 46622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46622, 'data-value': derived.doubled }, children);
}
export default Component46622;
