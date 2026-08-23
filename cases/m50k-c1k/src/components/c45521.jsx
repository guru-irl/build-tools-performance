import React from 'react';
const LABEL_45521 = 'component_45521';
export function Component45521({ value = 45521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45521, 'data-value': derived.doubled }, children);
}
export default Component45521;
