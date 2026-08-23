import React from 'react';
const LABEL_15165 = 'component_15165';
export function Component15165({ value = 15165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15165, 'data-value': derived.doubled }, children);
}
export default Component15165;
