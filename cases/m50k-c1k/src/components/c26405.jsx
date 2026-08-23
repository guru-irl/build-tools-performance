import React from 'react';
const LABEL_26405 = 'component_26405';
export function Component26405({ value = 26405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26405, 'data-value': derived.doubled }, children);
}
export default Component26405;
