import React from 'react';
const LABEL_22713 = 'component_22713';
export function Component22713({ value = 22713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22713, 'data-value': derived.doubled }, children);
}
export default Component22713;
