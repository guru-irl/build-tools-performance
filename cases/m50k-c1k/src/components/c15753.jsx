import React from 'react';
const LABEL_15753 = 'component_15753';
export function Component15753({ value = 15753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15753, 'data-value': derived.doubled }, children);
}
export default Component15753;
