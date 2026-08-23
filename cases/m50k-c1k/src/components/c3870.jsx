import React from 'react';
const LABEL_3870 = 'component_3870';
export function Component3870({ value = 3870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3870, 'data-value': derived.doubled }, children);
}
export default Component3870;
