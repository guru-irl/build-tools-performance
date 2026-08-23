import React from 'react';
const LABEL_42621 = 'component_42621';
export function Component42621({ value = 42621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42621, 'data-value': derived.doubled }, children);
}
export default Component42621;
