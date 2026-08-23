import React from 'react';
const LABEL_1791 = 'component_1791';
export function Component1791({ value = 1791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1791, 'data-value': derived.doubled }, children);
}
export default Component1791;
