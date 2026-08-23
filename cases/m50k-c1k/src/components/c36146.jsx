import React from 'react';
const LABEL_36146 = 'component_36146';
export function Component36146({ value = 36146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36146, 'data-value': derived.doubled }, children);
}
export default Component36146;
