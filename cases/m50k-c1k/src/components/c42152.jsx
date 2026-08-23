import React from 'react';
const LABEL_42152 = 'component_42152';
export function Component42152({ value = 42152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42152, 'data-value': derived.doubled }, children);
}
export default Component42152;
