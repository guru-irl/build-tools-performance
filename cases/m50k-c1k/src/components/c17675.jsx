import React from 'react';
const LABEL_17675 = 'component_17675';
export function Component17675({ value = 17675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17675, 'data-value': derived.doubled }, children);
}
export default Component17675;
