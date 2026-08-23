import React from 'react';
const LABEL_5301 = 'component_5301';
export function Component5301({ value = 5301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5301, 'data-value': derived.doubled }, children);
}
export default Component5301;
