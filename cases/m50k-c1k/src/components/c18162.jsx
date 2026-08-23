import React from 'react';
const LABEL_18162 = 'component_18162';
export function Component18162({ value = 18162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18162, 'data-value': derived.doubled }, children);
}
export default Component18162;
