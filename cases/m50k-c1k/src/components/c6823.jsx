import React from 'react';
const LABEL_6823 = 'component_6823';
export function Component6823({ value = 6823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6823, 'data-value': derived.doubled }, children);
}
export default Component6823;
