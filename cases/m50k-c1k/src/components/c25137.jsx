import React from 'react';
const LABEL_25137 = 'component_25137';
export function Component25137({ value = 25137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25137, 'data-value': derived.doubled }, children);
}
export default Component25137;
