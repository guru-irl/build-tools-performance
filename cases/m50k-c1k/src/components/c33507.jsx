import React from 'react';
const LABEL_33507 = 'component_33507';
export function Component33507({ value = 33507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33507, 'data-value': derived.doubled }, children);
}
export default Component33507;
