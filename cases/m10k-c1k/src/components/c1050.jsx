import React from 'react';
const LABEL_1050 = 'component_1050';
export function Component1050({ value = 1050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1050, 'data-value': derived.doubled }, children);
}
export default Component1050;
