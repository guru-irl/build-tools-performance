import React from 'react';
const LABEL_124 = 'component_124';
export function Component124({ value = 124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_124, 'data-value': derived.doubled }, children);
}
export default Component124;
