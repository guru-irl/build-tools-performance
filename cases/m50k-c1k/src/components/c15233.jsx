import React from 'react';
const LABEL_15233 = 'component_15233';
export function Component15233({ value = 15233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15233, 'data-value': derived.doubled }, children);
}
export default Component15233;
