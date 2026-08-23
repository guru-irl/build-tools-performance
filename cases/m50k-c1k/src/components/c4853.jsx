import React from 'react';
const LABEL_4853 = 'component_4853';
export function Component4853({ value = 4853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4853, 'data-value': derived.doubled }, children);
}
export default Component4853;
