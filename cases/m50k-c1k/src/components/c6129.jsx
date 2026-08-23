import React from 'react';
const LABEL_6129 = 'component_6129';
export function Component6129({ value = 6129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6129, 'data-value': derived.doubled }, children);
}
export default Component6129;
