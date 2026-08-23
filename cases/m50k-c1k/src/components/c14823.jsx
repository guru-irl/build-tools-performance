import React from 'react';
const LABEL_14823 = 'component_14823';
export function Component14823({ value = 14823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14823, 'data-value': derived.doubled }, children);
}
export default Component14823;
