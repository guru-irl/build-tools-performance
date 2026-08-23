import React from 'react';
const LABEL_40799 = 'component_40799';
export function Component40799({ value = 40799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40799, 'data-value': derived.doubled }, children);
}
export default Component40799;
