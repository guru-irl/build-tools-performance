import React from 'react';
const LABEL_1557 = 'component_1557';
export function Component1557({ value = 1557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1557, 'data-value': derived.doubled }, children);
}
export default Component1557;
