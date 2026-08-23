import React from 'react';
const LABEL_1619 = 'component_1619';
export function Component1619({ value = 1619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1619, 'data-value': derived.doubled }, children);
}
export default Component1619;
