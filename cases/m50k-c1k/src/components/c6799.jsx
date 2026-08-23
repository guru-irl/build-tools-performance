import React from 'react';
const LABEL_6799 = 'component_6799';
export function Component6799({ value = 6799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6799, 'data-value': derived.doubled }, children);
}
export default Component6799;
