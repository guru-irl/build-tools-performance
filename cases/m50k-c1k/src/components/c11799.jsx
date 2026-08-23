import React from 'react';
const LABEL_11799 = 'component_11799';
export function Component11799({ value = 11799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11799, 'data-value': derived.doubled }, children);
}
export default Component11799;
