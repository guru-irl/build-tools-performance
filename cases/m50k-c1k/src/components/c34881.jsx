import React from 'react';
const LABEL_34881 = 'component_34881';
export function Component34881({ value = 34881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34881, 'data-value': derived.doubled }, children);
}
export default Component34881;
