import React from 'react';
const LABEL_38816 = 'component_38816';
export function Component38816({ value = 38816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38816, 'data-value': derived.doubled }, children);
}
export default Component38816;
