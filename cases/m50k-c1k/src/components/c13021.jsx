import React from 'react';
const LABEL_13021 = 'component_13021';
export function Component13021({ value = 13021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13021, 'data-value': derived.doubled }, children);
}
export default Component13021;
