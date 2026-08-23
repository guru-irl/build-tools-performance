import React from 'react';
const LABEL_34799 = 'component_34799';
export function Component34799({ value = 34799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34799, 'data-value': derived.doubled }, children);
}
export default Component34799;
