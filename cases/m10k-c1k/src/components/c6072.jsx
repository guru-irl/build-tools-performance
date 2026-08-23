import React from 'react';
const LABEL_6072 = 'component_6072';
export function Component6072({ value = 6072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6072, 'data-value': derived.doubled }, children);
}
export default Component6072;
