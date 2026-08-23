import React from 'react';
const LABEL_23659 = 'component_23659';
export function Component23659({ value = 23659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23659, 'data-value': derived.doubled }, children);
}
export default Component23659;
