import React from 'react';
const LABEL_1237 = 'component_1237';
export function Component1237({ value = 1237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1237, 'data-value': derived.doubled }, children);
}
export default Component1237;
