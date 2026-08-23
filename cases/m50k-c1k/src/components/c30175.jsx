import React from 'react';
const LABEL_30175 = 'component_30175';
export function Component30175({ value = 30175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30175, 'data-value': derived.doubled }, children);
}
export default Component30175;
