import React from 'react';
const LABEL_35652 = 'component_35652';
export function Component35652({ value = 35652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35652, 'data-value': derived.doubled }, children);
}
export default Component35652;
