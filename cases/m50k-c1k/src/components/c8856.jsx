import React from 'react';
const LABEL_8856 = 'component_8856';
export function Component8856({ value = 8856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8856, 'data-value': derived.doubled }, children);
}
export default Component8856;
