import React from 'react';
const LABEL_36652 = 'component_36652';
export function Component36652({ value = 36652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36652, 'data-value': derived.doubled }, children);
}
export default Component36652;
