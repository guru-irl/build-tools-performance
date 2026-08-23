import React from 'react';
const LABEL_25146 = 'component_25146';
export function Component25146({ value = 25146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25146, 'data-value': derived.doubled }, children);
}
export default Component25146;
