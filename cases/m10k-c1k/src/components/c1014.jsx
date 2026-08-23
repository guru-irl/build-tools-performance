import React from 'react';
const LABEL_1014 = 'component_1014';
export function Component1014({ value = 1014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1014, 'data-value': derived.doubled }, children);
}
export default Component1014;
