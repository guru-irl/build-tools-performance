import React from 'react';
const LABEL_44187 = 'component_44187';
export function Component44187({ value = 44187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44187, 'data-value': derived.doubled }, children);
}
export default Component44187;
