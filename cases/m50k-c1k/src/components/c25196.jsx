import React from 'react';
const LABEL_25196 = 'component_25196';
export function Component25196({ value = 25196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25196, 'data-value': derived.doubled }, children);
}
export default Component25196;
