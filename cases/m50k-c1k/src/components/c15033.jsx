import React from 'react';
const LABEL_15033 = 'component_15033';
export function Component15033({ value = 15033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15033, 'data-value': derived.doubled }, children);
}
export default Component15033;
