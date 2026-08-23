import React from 'react';
const LABEL_17140 = 'component_17140';
export function Component17140({ value = 17140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17140, 'data-value': derived.doubled }, children);
}
export default Component17140;
