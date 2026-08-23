import React from 'react';
const LABEL_29424 = 'component_29424';
export function Component29424({ value = 29424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29424, 'data-value': derived.doubled }, children);
}
export default Component29424;
