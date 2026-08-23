import React from 'react';
const LABEL_36270 = 'component_36270';
export function Component36270({ value = 36270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36270, 'data-value': derived.doubled }, children);
}
export default Component36270;
