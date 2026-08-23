import React from 'react';
const LABEL_5706 = 'component_5706';
export function Component5706({ value = 5706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5706, 'data-value': derived.doubled }, children);
}
export default Component5706;
