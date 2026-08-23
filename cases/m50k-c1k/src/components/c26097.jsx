import React from 'react';
const LABEL_26097 = 'component_26097';
export function Component26097({ value = 26097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26097, 'data-value': derived.doubled }, children);
}
export default Component26097;
