import React from 'react';
const LABEL_10042 = 'component_10042';
export function Component10042({ value = 10042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10042, 'data-value': derived.doubled }, children);
}
export default Component10042;
