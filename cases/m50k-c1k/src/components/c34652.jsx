import React from 'react';
const LABEL_34652 = 'component_34652';
export function Component34652({ value = 34652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34652, 'data-value': derived.doubled }, children);
}
export default Component34652;
