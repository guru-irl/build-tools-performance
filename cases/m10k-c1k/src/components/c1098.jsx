import React from 'react';
const LABEL_1098 = 'component_1098';
export function Component1098({ value = 1098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1098, 'data-value': derived.doubled }, children);
}
export default Component1098;
