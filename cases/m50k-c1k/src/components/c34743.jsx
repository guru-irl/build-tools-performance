import React from 'react';
const LABEL_34743 = 'component_34743';
export function Component34743({ value = 34743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34743, 'data-value': derived.doubled }, children);
}
export default Component34743;
