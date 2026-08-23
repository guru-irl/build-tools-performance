import React from 'react';
const LABEL_16706 = 'component_16706';
export function Component16706({ value = 16706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16706, 'data-value': derived.doubled }, children);
}
export default Component16706;
