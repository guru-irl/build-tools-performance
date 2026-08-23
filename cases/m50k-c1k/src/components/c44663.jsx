import React from 'react';
const LABEL_44663 = 'component_44663';
export function Component44663({ value = 44663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44663, 'data-value': derived.doubled }, children);
}
export default Component44663;
