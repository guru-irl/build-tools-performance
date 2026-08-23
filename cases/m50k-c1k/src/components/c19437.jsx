import React from 'react';
const LABEL_19437 = 'component_19437';
export function Component19437({ value = 19437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19437, 'data-value': derived.doubled }, children);
}
export default Component19437;
