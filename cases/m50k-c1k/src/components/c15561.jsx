import React from 'react';
const LABEL_15561 = 'component_15561';
export function Component15561({ value = 15561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15561, 'data-value': derived.doubled }, children);
}
export default Component15561;
