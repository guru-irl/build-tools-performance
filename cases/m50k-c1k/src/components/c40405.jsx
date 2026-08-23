import React from 'react';
const LABEL_40405 = 'component_40405';
export function Component40405({ value = 40405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40405, 'data-value': derived.doubled }, children);
}
export default Component40405;
