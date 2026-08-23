import React from 'react';
const LABEL_1649 = 'component_1649';
export function Component1649({ value = 1649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1649, 'data-value': derived.doubled }, children);
}
export default Component1649;
