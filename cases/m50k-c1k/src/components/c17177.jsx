import React from 'react';
const LABEL_17177 = 'component_17177';
export function Component17177({ value = 17177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17177, 'data-value': derived.doubled }, children);
}
export default Component17177;
