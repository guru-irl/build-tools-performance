import React from 'react';
const LABEL_5021 = 'component_5021';
export function Component5021({ value = 5021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5021, 'data-value': derived.doubled }, children);
}
export default Component5021;
