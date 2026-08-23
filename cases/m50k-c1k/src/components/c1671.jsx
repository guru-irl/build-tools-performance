import React from 'react';
const LABEL_1671 = 'component_1671';
export function Component1671({ value = 1671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1671, 'data-value': derived.doubled }, children);
}
export default Component1671;
