import React from 'react';
const LABEL_17499 = 'component_17499';
export function Component17499({ value = 17499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17499, 'data-value': derived.doubled }, children);
}
export default Component17499;
