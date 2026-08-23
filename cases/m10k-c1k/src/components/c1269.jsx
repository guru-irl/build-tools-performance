import React from 'react';
const LABEL_1269 = 'component_1269';
export function Component1269({ value = 1269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1269, 'data-value': derived.doubled }, children);
}
export default Component1269;
