import React from 'react';
const LABEL_1736 = 'component_1736';
export function Component1736({ value = 1736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1736, 'data-value': derived.doubled }, children);
}
export default Component1736;
