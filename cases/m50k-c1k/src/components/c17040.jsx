import React from 'react';
const LABEL_17040 = 'component_17040';
export function Component17040({ value = 17040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17040, 'data-value': derived.doubled }, children);
}
export default Component17040;
