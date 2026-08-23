import React from 'react';
const LABEL_8121 = 'component_8121';
export function Component8121({ value = 8121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8121, 'data-value': derived.doubled }, children);
}
export default Component8121;
