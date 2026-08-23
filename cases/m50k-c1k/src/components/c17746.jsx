import React from 'react';
const LABEL_17746 = 'component_17746';
export function Component17746({ value = 17746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17746, 'data-value': derived.doubled }, children);
}
export default Component17746;
