import React from 'react';
const LABEL_10021 = 'component_10021';
export function Component10021({ value = 10021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10021, 'data-value': derived.doubled }, children);
}
export default Component10021;
