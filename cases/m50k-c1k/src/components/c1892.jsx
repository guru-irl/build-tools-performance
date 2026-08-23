import React from 'react';
const LABEL_1892 = 'component_1892';
export function Component1892({ value = 1892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1892, 'data-value': derived.doubled }, children);
}
export default Component1892;
