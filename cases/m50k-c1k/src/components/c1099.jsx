import React from 'react';
const LABEL_1099 = 'component_1099';
export function Component1099({ value = 1099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1099, 'data-value': derived.doubled }, children);
}
export default Component1099;
