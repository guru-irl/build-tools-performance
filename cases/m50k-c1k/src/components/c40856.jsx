import React from 'react';
const LABEL_40856 = 'component_40856';
export function Component40856({ value = 40856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40856, 'data-value': derived.doubled }, children);
}
export default Component40856;
