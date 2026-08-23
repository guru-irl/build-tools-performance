import React from 'react';
const LABEL_33644 = 'component_33644';
export function Component33644({ value = 33644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33644, 'data-value': derived.doubled }, children);
}
export default Component33644;
