import React from 'react';
const LABEL_18524 = 'component_18524';
export function Component18524({ value = 18524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18524, 'data-value': derived.doubled }, children);
}
export default Component18524;
