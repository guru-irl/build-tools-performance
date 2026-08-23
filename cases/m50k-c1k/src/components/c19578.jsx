import React from 'react';
const LABEL_19578 = 'component_19578';
export function Component19578({ value = 19578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19578, 'data-value': derived.doubled }, children);
}
export default Component19578;
