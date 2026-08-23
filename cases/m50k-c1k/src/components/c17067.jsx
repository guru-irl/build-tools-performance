import React from 'react';
const LABEL_17067 = 'component_17067';
export function Component17067({ value = 17067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17067, 'data-value': derived.doubled }, children);
}
export default Component17067;
