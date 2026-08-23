import React from 'react';
const LABEL_36193 = 'component_36193';
export function Component36193({ value = 36193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36193, 'data-value': derived.doubled }, children);
}
export default Component36193;
