import React from 'react';
const LABEL_17020 = 'component_17020';
export function Component17020({ value = 17020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17020, 'data-value': derived.doubled }, children);
}
export default Component17020;
