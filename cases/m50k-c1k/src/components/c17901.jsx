import React from 'react';
const LABEL_17901 = 'component_17901';
export function Component17901({ value = 17901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17901, 'data-value': derived.doubled }, children);
}
export default Component17901;
