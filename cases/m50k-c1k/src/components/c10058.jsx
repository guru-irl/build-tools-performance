import React from 'react';
const LABEL_10058 = 'component_10058';
export function Component10058({ value = 10058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10058, 'data-value': derived.doubled }, children);
}
export default Component10058;
