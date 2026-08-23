import React from 'react';
const LABEL_34890 = 'component_34890';
export function Component34890({ value = 34890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34890, 'data-value': derived.doubled }, children);
}
export default Component34890;
