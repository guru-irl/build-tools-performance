import React from 'react';
const LABEL_8189 = 'component_8189';
export function Component8189({ value = 8189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8189, 'data-value': derived.doubled }, children);
}
export default Component8189;
