import React from 'react';
const LABEL_19706 = 'component_19706';
export function Component19706({ value = 19706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19706, 'data-value': derived.doubled }, children);
}
export default Component19706;
