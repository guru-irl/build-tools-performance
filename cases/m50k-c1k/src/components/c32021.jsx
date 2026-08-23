import React from 'react';
const LABEL_32021 = 'component_32021';
export function Component32021({ value = 32021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32021, 'data-value': derived.doubled }, children);
}
export default Component32021;
