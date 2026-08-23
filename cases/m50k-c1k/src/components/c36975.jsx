import React from 'react';
const LABEL_36975 = 'component_36975';
export function Component36975({ value = 36975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36975, 'data-value': derived.doubled }, children);
}
export default Component36975;
