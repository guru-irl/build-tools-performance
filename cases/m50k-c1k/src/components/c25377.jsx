import React from 'react';
const LABEL_25377 = 'component_25377';
export function Component25377({ value = 25377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25377, 'data-value': derived.doubled }, children);
}
export default Component25377;
