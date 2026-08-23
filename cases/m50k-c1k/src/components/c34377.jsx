import React from 'react';
const LABEL_34377 = 'component_34377';
export function Component34377({ value = 34377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34377, 'data-value': derived.doubled }, children);
}
export default Component34377;
