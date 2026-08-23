import React from 'react';
const LABEL_34109 = 'component_34109';
export function Component34109({ value = 34109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34109, 'data-value': derived.doubled }, children);
}
export default Component34109;
