import React from 'react';
const LABEL_6042 = 'component_6042';
export function Component6042({ value = 6042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6042, 'data-value': derived.doubled }, children);
}
export default Component6042;
