import React from 'react';
const LABEL_28823 = 'component_28823';
export function Component28823({ value = 28823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28823, 'data-value': derived.doubled }, children);
}
export default Component28823;
