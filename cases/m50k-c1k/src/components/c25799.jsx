import React from 'react';
const LABEL_25799 = 'component_25799';
export function Component25799({ value = 25799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25799, 'data-value': derived.doubled }, children);
}
export default Component25799;
