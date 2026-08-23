import React from 'react';
const LABEL_2404 = 'component_2404';
export function Component2404({ value = 2404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2404, 'data-value': derived.doubled }, children);
}
export default Component2404;
