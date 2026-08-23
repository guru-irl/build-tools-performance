import React from 'react';
const LABEL_15231 = 'component_15231';
export function Component15231({ value = 15231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15231, 'data-value': derived.doubled }, children);
}
export default Component15231;
