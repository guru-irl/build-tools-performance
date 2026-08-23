import React from 'react';
const LABEL_23263 = 'component_23263';
export function Component23263({ value = 23263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23263, 'data-value': derived.doubled }, children);
}
export default Component23263;
