import React from 'react';
const LABEL_33981 = 'component_33981';
export function Component33981({ value = 33981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33981, 'data-value': derived.doubled }, children);
}
export default Component33981;
