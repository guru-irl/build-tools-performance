import React from 'react';
const LABEL_38263 = 'component_38263';
export function Component38263({ value = 38263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38263, 'data-value': derived.doubled }, children);
}
export default Component38263;
