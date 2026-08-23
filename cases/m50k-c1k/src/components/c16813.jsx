import React from 'react';
const LABEL_16813 = 'component_16813';
export function Component16813({ value = 16813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16813, 'data-value': derived.doubled }, children);
}
export default Component16813;
