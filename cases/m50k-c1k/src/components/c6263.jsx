import React from 'react';
const LABEL_6263 = 'component_6263';
export function Component6263({ value = 6263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6263, 'data-value': derived.doubled }, children);
}
export default Component6263;
