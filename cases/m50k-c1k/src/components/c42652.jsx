import React from 'react';
const LABEL_42652 = 'component_42652';
export function Component42652({ value = 42652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42652, 'data-value': derived.doubled }, children);
}
export default Component42652;
