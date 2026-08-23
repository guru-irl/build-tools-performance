import React from 'react';
const LABEL_426 = 'component_426';
export function Component426({ value = 426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_426, 'data-value': derived.doubled }, children);
}
export default Component426;
