import React from 'react';
const LABEL_15795 = 'component_15795';
export function Component15795({ value = 15795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15795, 'data-value': derived.doubled }, children);
}
export default Component15795;
