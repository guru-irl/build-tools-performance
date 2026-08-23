import React from 'react';
const LABEL_14163 = 'component_14163';
export function Component14163({ value = 14163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14163, 'data-value': derived.doubled }, children);
}
export default Component14163;
