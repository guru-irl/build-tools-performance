import React from 'react';
const LABEL_8152 = 'component_8152';
export function Component8152({ value = 8152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8152, 'data-value': derived.doubled }, children);
}
export default Component8152;
