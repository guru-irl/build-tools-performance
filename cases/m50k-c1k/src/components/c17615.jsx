import React from 'react';
const LABEL_17615 = 'component_17615';
export function Component17615({ value = 17615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17615, 'data-value': derived.doubled }, children);
}
export default Component17615;
