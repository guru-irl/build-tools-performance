import React from 'react';
const LABEL_42816 = 'component_42816';
export function Component42816({ value = 42816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42816, 'data-value': derived.doubled }, children);
}
export default Component42816;
