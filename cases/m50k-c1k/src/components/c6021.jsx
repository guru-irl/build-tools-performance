import React from 'react';
const LABEL_6021 = 'component_6021';
export function Component6021({ value = 6021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6021, 'data-value': derived.doubled }, children);
}
export default Component6021;
