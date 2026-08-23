import React from 'react';
const LABEL_15150 = 'component_15150';
export function Component15150({ value = 15150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15150, 'data-value': derived.doubled }, children);
}
export default Component15150;
