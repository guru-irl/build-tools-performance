import React from 'react';
const LABEL_8823 = 'component_8823';
export function Component8823({ value = 8823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8823, 'data-value': derived.doubled }, children);
}
export default Component8823;
