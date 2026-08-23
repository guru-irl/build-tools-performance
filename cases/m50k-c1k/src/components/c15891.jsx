import React from 'react';
const LABEL_15891 = 'component_15891';
export function Component15891({ value = 15891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15891, 'data-value': derived.doubled }, children);
}
export default Component15891;
