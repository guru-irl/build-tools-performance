import React from 'react';
const LABEL_42180 = 'component_42180';
export function Component42180({ value = 42180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42180, 'data-value': derived.doubled }, children);
}
export default Component42180;
