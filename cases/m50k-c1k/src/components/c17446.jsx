import React from 'react';
const LABEL_17446 = 'component_17446';
export function Component17446({ value = 17446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17446, 'data-value': derived.doubled }, children);
}
export default Component17446;
