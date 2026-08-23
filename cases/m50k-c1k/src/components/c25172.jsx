import React from 'react';
const LABEL_25172 = 'component_25172';
export function Component25172({ value = 25172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25172, 'data-value': derived.doubled }, children);
}
export default Component25172;
