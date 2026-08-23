import React from 'react';
const LABEL_17011 = 'component_17011';
export function Component17011({ value = 17011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17011, 'data-value': derived.doubled }, children);
}
export default Component17011;
