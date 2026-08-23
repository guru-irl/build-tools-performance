import React from 'react';
const LABEL_38741 = 'component_38741';
export function Component38741({ value = 38741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38741, 'data-value': derived.doubled }, children);
}
export default Component38741;
