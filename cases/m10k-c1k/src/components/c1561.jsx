import React from 'react';
const LABEL_1561 = 'component_1561';
export function Component1561({ value = 1561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1561, 'data-value': derived.doubled }, children);
}
export default Component1561;
