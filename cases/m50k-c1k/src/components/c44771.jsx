import React from 'react';
const LABEL_44771 = 'component_44771';
export function Component44771({ value = 44771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44771, 'data-value': derived.doubled }, children);
}
export default Component44771;
