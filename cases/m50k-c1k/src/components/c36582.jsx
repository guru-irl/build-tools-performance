import React from 'react';
const LABEL_36582 = 'component_36582';
export function Component36582({ value = 36582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36582, 'data-value': derived.doubled }, children);
}
export default Component36582;
