import React from 'react';
const LABEL_9622 = 'component_9622';
export function Component9622({ value = 9622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9622, 'data-value': derived.doubled }, children);
}
export default Component9622;
