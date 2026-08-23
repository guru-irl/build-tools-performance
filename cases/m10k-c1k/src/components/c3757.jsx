import React from 'react';
const LABEL_3757 = 'component_3757';
export function Component3757({ value = 3757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3757, 'data-value': derived.doubled }, children);
}
export default Component3757;
