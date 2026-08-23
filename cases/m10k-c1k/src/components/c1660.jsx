import React from 'react';
const LABEL_1660 = 'component_1660';
export function Component1660({ value = 1660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1660, 'data-value': derived.doubled }, children);
}
export default Component1660;
