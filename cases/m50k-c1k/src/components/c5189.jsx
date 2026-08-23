import React from 'react';
const LABEL_5189 = 'component_5189';
export function Component5189({ value = 5189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5189, 'data-value': derived.doubled }, children);
}
export default Component5189;
