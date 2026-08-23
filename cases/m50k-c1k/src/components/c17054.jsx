import React from 'react';
const LABEL_17054 = 'component_17054';
export function Component17054({ value = 17054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17054, 'data-value': derived.doubled }, children);
}
export default Component17054;
