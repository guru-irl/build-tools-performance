import React from 'react';
const LABEL_39823 = 'component_39823';
export function Component39823({ value = 39823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39823, 'data-value': derived.doubled }, children);
}
export default Component39823;
