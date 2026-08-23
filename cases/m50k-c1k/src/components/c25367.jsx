import React from 'react';
const LABEL_25367 = 'component_25367';
export function Component25367({ value = 25367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25367, 'data-value': derived.doubled }, children);
}
export default Component25367;
