import React from 'react';
const LABEL_6058 = 'component_6058';
export function Component6058({ value = 6058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6058, 'data-value': derived.doubled }, children);
}
export default Component6058;
