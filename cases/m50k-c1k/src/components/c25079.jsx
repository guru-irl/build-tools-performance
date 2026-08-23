import React from 'react';
const LABEL_25079 = 'component_25079';
export function Component25079({ value = 25079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25079, 'data-value': derived.doubled }, children);
}
export default Component25079;
