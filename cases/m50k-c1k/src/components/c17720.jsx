import React from 'react';
const LABEL_17720 = 'component_17720';
export function Component17720({ value = 17720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17720, 'data-value': derived.doubled }, children);
}
export default Component17720;
