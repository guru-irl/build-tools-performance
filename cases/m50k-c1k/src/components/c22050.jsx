import React from 'react';
const LABEL_22050 = 'component_22050';
export function Component22050({ value = 22050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22050, 'data-value': derived.doubled }, children);
}
export default Component22050;
