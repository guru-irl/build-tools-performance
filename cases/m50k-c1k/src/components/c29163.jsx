import React from 'react';
const LABEL_29163 = 'component_29163';
export function Component29163({ value = 29163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29163, 'data-value': derived.doubled }, children);
}
export default Component29163;
