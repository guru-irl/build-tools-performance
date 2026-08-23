import React from 'react';
const LABEL_17507 = 'component_17507';
export function Component17507({ value = 17507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17507, 'data-value': derived.doubled }, children);
}
export default Component17507;
