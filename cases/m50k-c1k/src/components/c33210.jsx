import React from 'react';
const LABEL_33210 = 'component_33210';
export function Component33210({ value = 33210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33210, 'data-value': derived.doubled }, children);
}
export default Component33210;
