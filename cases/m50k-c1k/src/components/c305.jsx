import React from 'react';
const LABEL_305 = 'component_305';
export function Component305({ value = 305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_305, 'data-value': derived.doubled }, children);
}
export default Component305;
