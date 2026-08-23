import React from 'react';
const LABEL_1058 = 'component_1058';
export function Component1058({ value = 1058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1058, 'data-value': derived.doubled }, children);
}
export default Component1058;
