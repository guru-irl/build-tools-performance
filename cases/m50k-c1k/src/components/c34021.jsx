import React from 'react';
const LABEL_34021 = 'component_34021';
export function Component34021({ value = 34021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34021, 'data-value': derived.doubled }, children);
}
export default Component34021;
