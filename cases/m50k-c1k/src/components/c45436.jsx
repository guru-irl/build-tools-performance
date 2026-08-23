import React from 'react';
const LABEL_45436 = 'component_45436';
export function Component45436({ value = 45436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45436, 'data-value': derived.doubled }, children);
}
export default Component45436;
