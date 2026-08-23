import React from 'react';
const LABEL_8975 = 'component_8975';
export function Component8975({ value = 8975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8975, 'data-value': derived.doubled }, children);
}
export default Component8975;
