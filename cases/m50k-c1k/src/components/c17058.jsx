import React from 'react';
const LABEL_17058 = 'component_17058';
export function Component17058({ value = 17058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17058, 'data-value': derived.doubled }, children);
}
export default Component17058;
