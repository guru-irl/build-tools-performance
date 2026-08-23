import React from 'react';
const LABEL_25044 = 'component_25044';
export function Component25044({ value = 25044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25044, 'data-value': derived.doubled }, children);
}
export default Component25044;
