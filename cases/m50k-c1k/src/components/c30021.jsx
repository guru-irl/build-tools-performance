import React from 'react';
const LABEL_30021 = 'component_30021';
export function Component30021({ value = 30021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30021, 'data-value': derived.doubled }, children);
}
export default Component30021;
