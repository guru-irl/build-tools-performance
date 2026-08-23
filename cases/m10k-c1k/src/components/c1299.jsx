import React from 'react';
const LABEL_1299 = 'component_1299';
export function Component1299({ value = 1299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1299, 'data-value': derived.doubled }, children);
}
export default Component1299;
