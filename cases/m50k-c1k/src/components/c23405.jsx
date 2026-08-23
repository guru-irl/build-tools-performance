import React from 'react';
const LABEL_23405 = 'component_23405';
export function Component23405({ value = 23405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23405, 'data-value': derived.doubled }, children);
}
export default Component23405;
