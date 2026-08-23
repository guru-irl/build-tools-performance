import React from 'react';
const LABEL_20838 = 'component_20838';
export function Component20838({ value = 20838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20838, 'data-value': derived.doubled }, children);
}
export default Component20838;
