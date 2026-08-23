import React from 'react';
const LABEL_29447 = 'component_29447';
export function Component29447({ value = 29447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29447, 'data-value': derived.doubled }, children);
}
export default Component29447;
