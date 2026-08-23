import React from 'react';
const LABEL_17302 = 'component_17302';
export function Component17302({ value = 17302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17302, 'data-value': derived.doubled }, children);
}
export default Component17302;
