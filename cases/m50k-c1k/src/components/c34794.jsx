import React from 'react';
const LABEL_34794 = 'component_34794';
export function Component34794({ value = 34794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34794, 'data-value': derived.doubled }, children);
}
export default Component34794;
