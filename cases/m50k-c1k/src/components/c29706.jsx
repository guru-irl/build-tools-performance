import React from 'react';
const LABEL_29706 = 'component_29706';
export function Component29706({ value = 29706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29706, 'data-value': derived.doubled }, children);
}
export default Component29706;
