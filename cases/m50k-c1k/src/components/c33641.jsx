import React from 'react';
const LABEL_33641 = 'component_33641';
export function Component33641({ value = 33641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33641, 'data-value': derived.doubled }, children);
}
export default Component33641;
