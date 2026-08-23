import React from 'react';
const LABEL_1451 = 'component_1451';
export function Component1451({ value = 1451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1451, 'data-value': derived.doubled }, children);
}
export default Component1451;
