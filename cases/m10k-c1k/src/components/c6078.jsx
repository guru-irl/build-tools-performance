import React from 'react';
const LABEL_6078 = 'component_6078';
export function Component6078({ value = 6078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6078, 'data-value': derived.doubled }, children);
}
export default Component6078;
