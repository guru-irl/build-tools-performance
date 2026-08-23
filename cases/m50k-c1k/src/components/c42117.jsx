import React from 'react';
const LABEL_42117 = 'component_42117';
export function Component42117({ value = 42117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42117, 'data-value': derived.doubled }, children);
}
export default Component42117;
