import React from 'react';
const LABEL_36823 = 'component_36823';
export function Component36823({ value = 36823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36823, 'data-value': derived.doubled }, children);
}
export default Component36823;
