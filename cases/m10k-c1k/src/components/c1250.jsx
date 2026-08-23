import React from 'react';
const LABEL_1250 = 'component_1250';
export function Component1250({ value = 1250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1250, 'data-value': derived.doubled }, children);
}
export default Component1250;
