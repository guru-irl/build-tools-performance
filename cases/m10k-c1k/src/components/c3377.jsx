import React from 'react';
const LABEL_3377 = 'component_3377';
export function Component3377({ value = 3377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3377, 'data-value': derived.doubled }, children);
}
export default Component3377;
