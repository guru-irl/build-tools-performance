import React from 'react';
const LABEL_44856 = 'component_44856';
export function Component44856({ value = 44856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44856, 'data-value': derived.doubled }, children);
}
export default Component44856;
