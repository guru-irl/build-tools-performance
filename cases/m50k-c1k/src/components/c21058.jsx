import React from 'react';
const LABEL_21058 = 'component_21058';
export function Component21058({ value = 21058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21058, 'data-value': derived.doubled }, children);
}
export default Component21058;
