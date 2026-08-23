import React from 'react';
const LABEL_16860 = 'component_16860';
export function Component16860({ value = 16860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16860, 'data-value': derived.doubled }, children);
}
export default Component16860;
