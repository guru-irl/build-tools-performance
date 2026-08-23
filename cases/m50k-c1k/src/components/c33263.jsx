import React from 'react';
const LABEL_33263 = 'component_33263';
export function Component33263({ value = 33263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33263, 'data-value': derived.doubled }, children);
}
export default Component33263;
