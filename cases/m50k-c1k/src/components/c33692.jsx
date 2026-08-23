import React from 'react';
const LABEL_33692 = 'component_33692';
export function Component33692({ value = 33692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33692, 'data-value': derived.doubled }, children);
}
export default Component33692;
