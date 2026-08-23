import React from 'react';
const LABEL_34488 = 'component_34488';
export function Component34488({ value = 34488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34488, 'data-value': derived.doubled }, children);
}
export default Component34488;
