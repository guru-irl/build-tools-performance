import React from 'react';
const LABEL_25347 = 'component_25347';
export function Component25347({ value = 25347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25347, 'data-value': derived.doubled }, children);
}
export default Component25347;
