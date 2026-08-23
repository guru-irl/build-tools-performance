import React from 'react';
const LABEL_46582 = 'component_46582';
export function Component46582({ value = 46582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46582, 'data-value': derived.doubled }, children);
}
export default Component46582;
