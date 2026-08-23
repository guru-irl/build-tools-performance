import React from 'react';
const LABEL_1365 = 'component_1365';
export function Component1365({ value = 1365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1365, 'data-value': derived.doubled }, children);
}
export default Component1365;
