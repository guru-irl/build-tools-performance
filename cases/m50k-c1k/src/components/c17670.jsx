import React from 'react';
const LABEL_17670 = 'component_17670';
export function Component17670({ value = 17670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17670, 'data-value': derived.doubled }, children);
}
export default Component17670;
