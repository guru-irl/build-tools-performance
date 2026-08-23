import React from 'react';
const LABEL_6332 = 'component_6332';
export function Component6332({ value = 6332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6332, 'data-value': derived.doubled }, children);
}
export default Component6332;
