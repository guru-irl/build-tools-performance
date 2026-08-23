import React from 'react';
const LABEL_25258 = 'component_25258';
export function Component25258({ value = 25258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25258, 'data-value': derived.doubled }, children);
}
export default Component25258;
