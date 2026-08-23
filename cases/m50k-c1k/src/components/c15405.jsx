import React from 'react';
const LABEL_15405 = 'component_15405';
export function Component15405({ value = 15405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15405, 'data-value': derived.doubled }, children);
}
export default Component15405;
