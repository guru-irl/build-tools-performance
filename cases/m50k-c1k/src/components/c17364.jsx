import React from 'react';
const LABEL_17364 = 'component_17364';
export function Component17364({ value = 17364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17364, 'data-value': derived.doubled }, children);
}
export default Component17364;
