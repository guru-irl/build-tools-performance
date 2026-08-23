import React from 'react';
const LABEL_1462 = 'component_1462';
export function Component1462({ value = 1462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1462, 'data-value': derived.doubled }, children);
}
export default Component1462;
