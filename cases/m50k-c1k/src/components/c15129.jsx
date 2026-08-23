import React from 'react';
const LABEL_15129 = 'component_15129';
export function Component15129({ value = 15129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15129, 'data-value': derived.doubled }, children);
}
export default Component15129;
