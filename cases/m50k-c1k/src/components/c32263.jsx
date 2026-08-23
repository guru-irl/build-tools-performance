import React from 'react';
const LABEL_32263 = 'component_32263';
export function Component32263({ value = 32263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32263, 'data-value': derived.doubled }, children);
}
export default Component32263;
