import React from 'react';
const LABEL_15241 = 'component_15241';
export function Component15241({ value = 15241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15241, 'data-value': derived.doubled }, children);
}
export default Component15241;
