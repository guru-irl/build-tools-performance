import React from 'react';
const LABEL_1699 = 'component_1699';
export function Component1699({ value = 1699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1699, 'data-value': derived.doubled }, children);
}
export default Component1699;
