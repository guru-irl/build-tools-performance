import React from 'react';
const LABEL_42139 = 'component_42139';
export function Component42139({ value = 42139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42139, 'data-value': derived.doubled }, children);
}
export default Component42139;
