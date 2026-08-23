import React from 'react';
const LABEL_46193 = 'component_46193';
export function Component46193({ value = 46193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46193, 'data-value': derived.doubled }, children);
}
export default Component46193;
