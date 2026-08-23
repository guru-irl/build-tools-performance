import React from 'react';
const LABEL_1458 = 'component_1458';
export function Component1458({ value = 1458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1458, 'data-value': derived.doubled }, children);
}
export default Component1458;
