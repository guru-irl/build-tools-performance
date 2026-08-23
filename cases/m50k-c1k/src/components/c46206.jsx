import React from 'react';
const LABEL_46206 = 'component_46206';
export function Component46206({ value = 46206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46206, 'data-value': derived.doubled }, children);
}
export default Component46206;
