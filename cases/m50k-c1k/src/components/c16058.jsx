import React from 'react';
const LABEL_16058 = 'component_16058';
export function Component16058({ value = 16058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16058, 'data-value': derived.doubled }, children);
}
export default Component16058;
