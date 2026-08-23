import React from 'react';
const LABEL_3829 = 'component_3829';
export function Component3829({ value = 3829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3829, 'data-value': derived.doubled }, children);
}
export default Component3829;
