import React from 'react';
const LABEL_4133 = 'component_4133';
export function Component4133({ value = 4133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4133, 'data-value': derived.doubled }, children);
}
export default Component4133;
