import React from 'react';
const LABEL_1929 = 'component_1929';
export function Component1929({ value = 1929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1929, 'data-value': derived.doubled }, children);
}
export default Component1929;
