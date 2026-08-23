import React from 'react';
const LABEL_5242 = 'component_5242';
export function Component5242({ value = 5242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5242, 'data-value': derived.doubled }, children);
}
export default Component5242;
