import React from 'react';
const LABEL_1875 = 'component_1875';
export function Component1875({ value = 1875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1875, 'data-value': derived.doubled }, children);
}
export default Component1875;
