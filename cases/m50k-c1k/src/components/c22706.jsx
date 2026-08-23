import React from 'react';
const LABEL_22706 = 'component_22706';
export function Component22706({ value = 22706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22706, 'data-value': derived.doubled }, children);
}
export default Component22706;
