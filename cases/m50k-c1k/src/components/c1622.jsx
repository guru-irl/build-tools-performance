import React from 'react';
const LABEL_1622 = 'component_1622';
export function Component1622({ value = 1622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1622, 'data-value': derived.doubled }, children);
}
export default Component1622;
