import React from 'react';
const LABEL_1877 = 'component_1877';
export function Component1877({ value = 1877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1877, 'data-value': derived.doubled }, children);
}
export default Component1877;
