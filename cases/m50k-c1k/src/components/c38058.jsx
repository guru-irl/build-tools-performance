import React from 'react';
const LABEL_38058 = 'component_38058';
export function Component38058({ value = 38058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38058, 'data-value': derived.doubled }, children);
}
export default Component38058;
