import React from 'react';
const LABEL_15796 = 'component_15796';
export function Component15796({ value = 15796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15796, 'data-value': derived.doubled }, children);
}
export default Component15796;
