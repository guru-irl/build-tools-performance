import React from 'react';
const LABEL_19046 = 'component_19046';
export function Component19046({ value = 19046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19046, 'data-value': derived.doubled }, children);
}
export default Component19046;
