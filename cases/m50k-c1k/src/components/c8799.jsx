import React from 'react';
const LABEL_8799 = 'component_8799';
export function Component8799({ value = 8799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8799, 'data-value': derived.doubled }, children);
}
export default Component8799;
