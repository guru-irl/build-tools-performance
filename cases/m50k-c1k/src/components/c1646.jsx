import React from 'react';
const LABEL_1646 = 'component_1646';
export function Component1646({ value = 1646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1646, 'data-value': derived.doubled }, children);
}
export default Component1646;
