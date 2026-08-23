import React from 'react';
const LABEL_45589 = 'component_45589';
export function Component45589({ value = 45589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45589, 'data-value': derived.doubled }, children);
}
export default Component45589;
