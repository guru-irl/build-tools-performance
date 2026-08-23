import React from 'react';
const LABEL_17105 = 'component_17105';
export function Component17105({ value = 17105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17105, 'data-value': derived.doubled }, children);
}
export default Component17105;
