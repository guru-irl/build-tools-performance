import React from 'react';
const LABEL_38021 = 'component_38021';
export function Component38021({ value = 38021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38021, 'data-value': derived.doubled }, children);
}
export default Component38021;
