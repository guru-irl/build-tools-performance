import React from 'react';
const LABEL_8546 = 'component_8546';
export function Component8546({ value = 8546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8546, 'data-value': derived.doubled }, children);
}
export default Component8546;
