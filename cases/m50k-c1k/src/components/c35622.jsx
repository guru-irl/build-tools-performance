import React from 'react';
const LABEL_35622 = 'component_35622';
export function Component35622({ value = 35622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35622, 'data-value': derived.doubled }, children);
}
export default Component35622;
