import React from 'react';
const LABEL_44961 = 'component_44961';
export function Component44961({ value = 44961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44961, 'data-value': derived.doubled }, children);
}
export default Component44961;
