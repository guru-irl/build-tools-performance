import React from 'react';
const LABEL_17269 = 'component_17269';
export function Component17269({ value = 17269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17269, 'data-value': derived.doubled }, children);
}
export default Component17269;
