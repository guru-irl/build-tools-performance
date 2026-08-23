import React from 'react';
const LABEL_17215 = 'component_17215';
export function Component17215({ value = 17215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17215, 'data-value': derived.doubled }, children);
}
export default Component17215;
