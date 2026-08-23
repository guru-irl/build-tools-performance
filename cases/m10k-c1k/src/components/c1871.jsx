import React from 'react';
const LABEL_1871 = 'component_1871';
export function Component1871({ value = 1871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1871, 'data-value': derived.doubled }, children);
}
export default Component1871;
