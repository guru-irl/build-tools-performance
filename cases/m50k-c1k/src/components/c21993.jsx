import React from 'react';
const LABEL_21993 = 'component_21993';
export function Component21993({ value = 21993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21993, 'data-value': derived.doubled }, children);
}
export default Component21993;
