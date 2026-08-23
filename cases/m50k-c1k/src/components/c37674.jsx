import React from 'react';
const LABEL_37674 = 'component_37674';
export function Component37674({ value = 37674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37674, 'data-value': derived.doubled }, children);
}
export default Component37674;
