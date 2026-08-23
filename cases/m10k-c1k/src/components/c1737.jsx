import React from 'react';
const LABEL_1737 = 'component_1737';
export function Component1737({ value = 1737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1737, 'data-value': derived.doubled }, children);
}
export default Component1737;
