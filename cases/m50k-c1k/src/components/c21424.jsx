import React from 'react';
const LABEL_21424 = 'component_21424';
export function Component21424({ value = 21424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21424, 'data-value': derived.doubled }, children);
}
export default Component21424;
