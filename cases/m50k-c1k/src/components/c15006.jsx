import React from 'react';
const LABEL_15006 = 'component_15006';
export function Component15006({ value = 15006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15006, 'data-value': derived.doubled }, children);
}
export default Component15006;
