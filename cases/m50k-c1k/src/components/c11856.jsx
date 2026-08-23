import React from 'react';
const LABEL_11856 = 'component_11856';
export function Component11856({ value = 11856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11856, 'data-value': derived.doubled }, children);
}
export default Component11856;
