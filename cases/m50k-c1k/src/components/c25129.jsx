import React from 'react';
const LABEL_25129 = 'component_25129';
export function Component25129({ value = 25129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25129, 'data-value': derived.doubled }, children);
}
export default Component25129;
