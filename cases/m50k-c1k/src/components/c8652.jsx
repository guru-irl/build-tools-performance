import React from 'react';
const LABEL_8652 = 'component_8652';
export function Component8652({ value = 8652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8652, 'data-value': derived.doubled }, children);
}
export default Component8652;
