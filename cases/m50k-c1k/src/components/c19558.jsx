import React from 'react';
const LABEL_19558 = 'component_19558';
export function Component19558({ value = 19558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19558, 'data-value': derived.doubled }, children);
}
export default Component19558;
