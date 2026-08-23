import React from 'react';
const LABEL_15853 = 'component_15853';
export function Component15853({ value = 15853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15853, 'data-value': derived.doubled }, children);
}
export default Component15853;
