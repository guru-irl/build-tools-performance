import React from 'react';
const LABEL_17772 = 'component_17772';
export function Component17772({ value = 17772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17772, 'data-value': derived.doubled }, children);
}
export default Component17772;
