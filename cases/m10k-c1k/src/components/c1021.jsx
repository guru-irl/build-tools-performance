import React from 'react';
const LABEL_1021 = 'component_1021';
export function Component1021({ value = 1021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1021, 'data-value': derived.doubled }, children);
}
export default Component1021;
