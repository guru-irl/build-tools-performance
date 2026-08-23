import React from 'react';
const LABEL_3014 = 'component_3014';
export function Component3014({ value = 3014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3014, 'data-value': derived.doubled }, children);
}
export default Component3014;
