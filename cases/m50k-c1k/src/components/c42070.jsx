import React from 'react';
const LABEL_42070 = 'component_42070';
export function Component42070({ value = 42070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42070, 'data-value': derived.doubled }, children);
}
export default Component42070;
