import React from 'react';
const LABEL_22105 = 'component_22105';
export function Component22105({ value = 22105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22105, 'data-value': derived.doubled }, children);
}
export default Component22105;
