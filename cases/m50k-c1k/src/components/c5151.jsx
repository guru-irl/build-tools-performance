import React from 'react';
const LABEL_5151 = 'component_5151';
export function Component5151({ value = 5151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5151, 'data-value': derived.doubled }, children);
}
export default Component5151;
