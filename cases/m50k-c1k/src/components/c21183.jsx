import React from 'react';
const LABEL_21183 = 'component_21183';
export function Component21183({ value = 21183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21183, 'data-value': derived.doubled }, children);
}
export default Component21183;
