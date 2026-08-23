import React from 'react';
const LABEL_6622 = 'component_6622';
export function Component6622({ value = 6622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6622, 'data-value': derived.doubled }, children);
}
export default Component6622;
