import React from 'react';
const LABEL_34801 = 'component_34801';
export function Component34801({ value = 34801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34801, 'data-value': derived.doubled }, children);
}
export default Component34801;
