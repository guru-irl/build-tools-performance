import React from 'react';
const LABEL_17505 = 'component_17505';
export function Component17505({ value = 17505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17505, 'data-value': derived.doubled }, children);
}
export default Component17505;
