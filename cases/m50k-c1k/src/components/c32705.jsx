import React from 'react';
const LABEL_32705 = 'component_32705';
export function Component32705({ value = 32705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32705, 'data-value': derived.doubled }, children);
}
export default Component32705;
