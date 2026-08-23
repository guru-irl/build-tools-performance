import React from 'react';
const LABEL_38625 = 'component_38625';
export function Component38625({ value = 38625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38625, 'data-value': derived.doubled }, children);
}
export default Component38625;
