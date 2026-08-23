import React from 'react';
const LABEL_36058 = 'component_36058';
export function Component36058({ value = 36058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36058, 'data-value': derived.doubled }, children);
}
export default Component36058;
