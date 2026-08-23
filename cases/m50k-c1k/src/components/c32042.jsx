import React from 'react';
const LABEL_32042 = 'component_32042';
export function Component32042({ value = 32042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32042, 'data-value': derived.doubled }, children);
}
export default Component32042;
