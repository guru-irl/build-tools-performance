import React from 'react';
const LABEL_38838 = 'component_38838';
export function Component38838({ value = 38838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38838, 'data-value': derived.doubled }, children);
}
export default Component38838;
