import React from 'react';
const LABEL_33129 = 'component_33129';
export function Component33129({ value = 33129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33129, 'data-value': derived.doubled }, children);
}
export default Component33129;
