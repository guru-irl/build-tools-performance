import React from 'react';
const LABEL_16977 = 'component_16977';
export function Component16977({ value = 16977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16977, 'data-value': derived.doubled }, children);
}
export default Component16977;
