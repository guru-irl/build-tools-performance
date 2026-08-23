import React from 'react';
const LABEL_10706 = 'component_10706';
export function Component10706({ value = 10706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10706, 'data-value': derived.doubled }, children);
}
export default Component10706;
