import React from 'react';
const LABEL_7405 = 'component_7405';
export function Component7405({ value = 7405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7405, 'data-value': derived.doubled }, children);
}
export default Component7405;
