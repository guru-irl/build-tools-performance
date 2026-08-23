import React from 'react';
const LABEL_38881 = 'component_38881';
export function Component38881({ value = 38881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38881, 'data-value': derived.doubled }, children);
}
export default Component38881;
