import React from 'react';
const LABEL_1286 = 'component_1286';
export function Component1286({ value = 1286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1286, 'data-value': derived.doubled }, children);
}
export default Component1286;
