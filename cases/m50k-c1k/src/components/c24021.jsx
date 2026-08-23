import React from 'react';
const LABEL_24021 = 'component_24021';
export function Component24021({ value = 24021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24021, 'data-value': derived.doubled }, children);
}
export default Component24021;
