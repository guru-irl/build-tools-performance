import React from 'react';
const LABEL_13861 = 'component_13861';
export function Component13861({ value = 13861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13861, 'data-value': derived.doubled }, children);
}
export default Component13861;
