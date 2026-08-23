import React from 'react';
const LABEL_31674 = 'component_31674';
export function Component31674({ value = 31674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31674, 'data-value': derived.doubled }, children);
}
export default Component31674;
