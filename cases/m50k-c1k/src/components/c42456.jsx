import React from 'react';
const LABEL_42456 = 'component_42456';
export function Component42456({ value = 42456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42456, 'data-value': derived.doubled }, children);
}
export default Component42456;
