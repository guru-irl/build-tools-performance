import React from 'react';
const LABEL_33405 = 'component_33405';
export function Component33405({ value = 33405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33405, 'data-value': derived.doubled }, children);
}
export default Component33405;
