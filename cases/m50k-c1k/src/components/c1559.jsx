import React from 'react';
const LABEL_1559 = 'component_1559';
export function Component1559({ value = 1559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1559, 'data-value': derived.doubled }, children);
}
export default Component1559;
