import React from 'react';
const LABEL_38823 = 'component_38823';
export function Component38823({ value = 38823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38823, 'data-value': derived.doubled }, children);
}
export default Component38823;
