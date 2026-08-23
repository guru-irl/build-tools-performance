import React from 'react';
const LABEL_25833 = 'component_25833';
export function Component25833({ value = 25833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25833, 'data-value': derived.doubled }, children);
}
export default Component25833;
