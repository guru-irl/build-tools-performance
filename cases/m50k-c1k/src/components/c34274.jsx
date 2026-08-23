import React from 'react';
const LABEL_34274 = 'component_34274';
export function Component34274({ value = 34274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34274, 'data-value': derived.doubled }, children);
}
export default Component34274;
