import React from 'react';
const LABEL_1621 = 'component_1621';
export function Component1621({ value = 1621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1621, 'data-value': derived.doubled }, children);
}
export default Component1621;
