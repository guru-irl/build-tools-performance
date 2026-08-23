import React from 'react';
const LABEL_38585 = 'component_38585';
export function Component38585({ value = 38585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38585, 'data-value': derived.doubled }, children);
}
export default Component38585;
