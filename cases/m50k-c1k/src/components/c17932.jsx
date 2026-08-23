import React from 'react';
const LABEL_17932 = 'component_17932';
export function Component17932({ value = 17932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17932, 'data-value': derived.doubled }, children);
}
export default Component17932;
