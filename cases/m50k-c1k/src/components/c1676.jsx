import React from 'react';
const LABEL_1676 = 'component_1676';
export function Component1676({ value = 1676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1676, 'data-value': derived.doubled }, children);
}
export default Component1676;
