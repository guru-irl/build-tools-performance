import React from 'react';
const LABEL_40961 = 'component_40961';
export function Component40961({ value = 40961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40961, 'data-value': derived.doubled }, children);
}
export default Component40961;
