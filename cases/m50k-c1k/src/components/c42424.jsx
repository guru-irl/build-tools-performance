import React from 'react';
const LABEL_42424 = 'component_42424';
export function Component42424({ value = 42424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42424, 'data-value': derived.doubled }, children);
}
export default Component42424;
