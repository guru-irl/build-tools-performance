import React from 'react';
const LABEL_33589 = 'component_33589';
export function Component33589({ value = 33589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33589, 'data-value': derived.doubled }, children);
}
export default Component33589;
