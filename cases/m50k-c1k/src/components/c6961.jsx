import React from 'react';
const LABEL_6961 = 'component_6961';
export function Component6961({ value = 6961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6961, 'data-value': derived.doubled }, children);
}
export default Component6961;
