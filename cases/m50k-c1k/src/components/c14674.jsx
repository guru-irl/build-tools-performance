import React from 'react';
const LABEL_14674 = 'component_14674';
export function Component14674({ value = 14674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14674, 'data-value': derived.doubled }, children);
}
export default Component14674;
