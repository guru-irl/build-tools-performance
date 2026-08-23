import React from 'react';
const LABEL_6469 = 'component_6469';
export function Component6469({ value = 6469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6469, 'data-value': derived.doubled }, children);
}
export default Component6469;
