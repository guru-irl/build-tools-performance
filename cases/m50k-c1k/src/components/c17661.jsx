import React from 'react';
const LABEL_17661 = 'component_17661';
export function Component17661({ value = 17661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17661, 'data-value': derived.doubled }, children);
}
export default Component17661;
